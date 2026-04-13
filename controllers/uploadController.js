const cloudinary = require("../config/cloudinary");

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const result = await cloudinary.uploader.upload(req.file.path);

    res.json({
      message: "Image uploaded",
      url: result.secure_url
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};