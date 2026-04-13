const router = require("express").Router();
const upload = require("../middleware/multer");
const { uploadImage } = require("../controllers/uploadController");

router.post("/upload", upload.single("image"), uploadImage);

module.exports = router;