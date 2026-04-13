const cloudinary = require("../config/cloudinary");

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const stream = cloudinary.uploader.upload_stream(
      { folder: "uploads" },
      (error, result) => {
        if (error) {
          return res.status(500).json({ error: error.message });
        }
        res.json({
          message: "Image uploaded",
          url: result.secure_url
        });
      }
    );

    stream.end(req.file.buffer);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};