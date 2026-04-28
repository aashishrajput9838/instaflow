import type { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import multer from 'multer';
import fs from 'fs-extra';
import path from 'path';
import AdmZip from 'adm-zip';
import { computeAnalytics, parseFollowers, parseFollowing } from '../../../src/utils/instagramAnalyzer';

// Configure Multer storage to a temporary folder
const upload = multer({
  dest: path.join(process.cwd(), 'tmp'),
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
});

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
  onError(error, req, res) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  },
  onNoMatch(req, res) {
    res.status(405).json({ success: false, message: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('file'));

apiRoute.post(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  const zipPath = req.file.path;
  const extractDir = path.join(process.cwd(), 'tmp', `extracted_${Date.now()}`);

  try {
    // Extract ZIP
    const zip = new AdmZip(zipPath);
    zip.extractAllTo(extractDir, true);

    // Load followers and following data
    const followers = await parseFollowers(extractDir);
    const following = await parseFollowing(extractDir);

    // Compute analytics
    const { stats, lists } = computeAnalytics(followers, following);

    // Cleanup temporary files
    await fs.remove(zipPath);
    await fs.remove(extractDir);

    res.status(200).json({ success: true, stats, lists });
  } catch (err: any) {
    console.error(err);
    // Cleanup on error as well
    await fs.remove(zipPath).catch(() => {});
    await fs.remove(extractDir).catch(() => {});
    res.status(400).json({ success: false, message: err.message || 'Failed to process ZIP' });
  }
});

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export default apiRoute;
