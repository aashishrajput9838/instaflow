const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs-extra');
const AdmZip = require('adm-zip');
const { parseFollowers, parseFollowing, computeAnalytics } = require('../utils/instagramParser');

const router = express.Router();

// Multer config – store uploads in backend/tmp
const upload = multer({
  dest: path.join(__dirname, '../../backend/tmp'),
  limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB
});

// POST /api/instagram/upload
router.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  const zipPath = req.file.path;
  const extractDir = path.join(path.dirname(zipPath), `extracted_${Date.now()}`);

  try {
    // Extract ZIP
    const zip = new AdmZip(zipPath);
    zip.extractAllTo(extractDir, true);

    // Parse JSON data
    const followers = await parseFollowers(extractDir);
    const following = await parseFollowing(extractDir);

    // Compute analytics
    const { stats, lists } = computeAnalytics(followers, following);

    // Cleanup
    await fs.remove(zipPath);
    await fs.remove(extractDir);

    res.json({ success: true, stats, lists });
  } catch (err) {
    console.error(err);
    // Cleanup on error
    await fs.remove(zipPath).catch(() => {});
    await fs.remove(extractDir).catch(() => {});
    res.status(400).json({ success: false, message: err.message || 'Failed to process ZIP' });
  }
});

module.exports = router;
