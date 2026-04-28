const fs = require('fs-extra');
const path = require('path');

/**
 * Recursively find all files matching a pattern within a directory.
 * @param {string} dir - Base directory.
 * @param {RegExp} pattern - RegExp to test file names.
 * @returns {Promise<string[]>} - Array of absolute file paths.
 */
async function findFiles(dir, pattern) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return await findFiles(fullPath, pattern);
      if (pattern.test(entry.name)) return fullPath;
      return null;
    })
  );
  return files.flat().filter(Boolean);
}

/**
 * Parse follower JSON files located under `connections/followers_and_following/`.
 * Supports multiple `followers_*.json` files.
 * Returns an array of usernames (strings).
 */
async function parseFollowers(baseDir) {
  const followersDir = path.join(baseDir, 'connections', 'followers_and_following');
  const followerFiles = await findFiles(followersDir, /^followers_\d+\.json$/i);
  const usernames = new Set();
  for (const file of followerFiles) {
    const data = await fs.readJson(file);
    if (!Array.isArray(data)) continue;
    data.forEach((item) => {
      if (Array.isArray(item.string_list_data)) {
        item.string_list_data.forEach((entry) => {
          if (entry.value) usernames.add(entry.value.trim());
        });
      }
    });
  }
  return Array.from(usernames);
}

/**
 * Parse the following JSON file (`following.json`).
 * Returns an array of usernames.
 */
async function parseFollowing(baseDir) {
  const followingPath = path.join(
    baseDir,
    'connections',
    'followers_and_following',
    'following.json'
  );
  const exists = await fs.pathExists(followingPath);
  if (!exists) return [];
  const data = await fs.readJson(followingPath);
  const usernames = new Set();
  if (Array.isArray(data.relationships_following)) {
    data.relationships_following.forEach((item) => {
      if (Array.isArray(item.string_list_data)) {
        item.string_list_data.forEach((entry) => {
          if (entry.value) usernames.add(entry.value.trim());
        });
      }
    });
  }
  return Array.from(usernames);
}

/**
 * Compute analytics based on followers and following arrays.
 * Returns { stats, lists } matching the API response format.
 */
function computeAnalytics(followers, following) {
  const followerSet = new Set(followers);
  const followingSet = new Set(following);

  const mutuals = followers.filter((u) => followingSet.has(u));
  const notFollowingBack = following.filter((u) => !followerSet.has(u));
  const fans = followers.filter((u) => !followingSet.has(u));

  const stats = {
    totalFollowers: followers.length,
    totalFollowing: following.length,
    mutualsCount: mutuals.length,
    notFollowingBackCount: notFollowingBack.length,
    fansCount: fans.length,
  };

  const lists = {
    followers,
    following,
    mutuals,
    notFollowingBack,
    fans,
  };

  return { stats, lists };
}

module.exports = { parseFollowers, parseFollowing, computeAnalytics };
