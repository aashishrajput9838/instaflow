const express = require('express');
const path = require('path');
const cors = require('cors');
const instagramRouter = require('./routes/instagram');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/instagram', instagramRouter);

// Serve static files if needed (e.g., for health checks)
app.get('/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Instagram Analyzer backend listening on port ${PORT}`);
});
