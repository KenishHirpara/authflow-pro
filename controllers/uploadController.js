const cloudinary = require("../config/cloudinary");

exports.uploadImage = async (req, res) => {
  try {
    // check file
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // upload using buffer (IMPORTANT)
    const stream = cloudinary.uploader.upload_stream(
      { folder: "uploads" },
      (error, result) => {
        if (error) {
          return res.status(500).json({ error: error.message });
        }

        return res.json({
          message: "Image uploaded successfully",
          url: result.secure_url
        });
      }
    );

    // send buffer to cloudinary
    stream.end(req.file.buffer);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};