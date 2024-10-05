const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const cors = require('cors'); // Add this line to import CORS

const app = express();
const port = 5001;

// Enable CORS
app.use(cors()); // Allow requests from other origins (like Vite on localhost:5173)

// Define storage for original SVG files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/svg/'); // Save SVGs to 'uploads/svg/' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); // Unique file name
  }
});

const upload = multer({ storage });

// Serve static files (for viewing uploaded files)
app.use('/uploads', express.static('uploads'));

// Test route to verify communication between frontend and backend
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working and accessible!' });
});

// Route to handle SVG upload and convert to WebP
app.post('/upload-svg', upload.single('svg'), async (req, res) => {
  const { file } = req;
  if (!file) {
    return res.status(400).send('No file uploaded');
  }

  const svgFilePath = file.path; // Path of uploaded SVG
  const webpFileName = `webp_${Date.now()}.webp`;
  const webpFilePath = path.join(__dirname, 'uploads', 'webp', webpFileName);

  // Ensure 'uploads/webp' directory exists
  if (!fs.existsSync(path.join(__dirname, 'uploads/webp'))) {
    fs.mkdirSync(path.join(__dirname, 'uploads/webp'), { recursive: true });
  }

  try {
    // Convert the SVG to WebP format
    await sharp(svgFilePath)
      .webp({ quality: 80 }) // Convert to WebP with 80% quality
      .toFile(webpFilePath);

    // Optionally, delete the original SVG after conversion if you don't need it
    // fs.unlinkSync(svgFilePath);

    res.json({
      message: 'SVG converted to WebP successfully',
      webpUrl: `http://localhost:${port}/uploads/webp/${webpFileName}`
    });
  } catch (error) {
    console.error('Error converting SVG to WebP:', error);
    res.status(500).json({ error: 'Failed to convert SVG to WebP' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});