const router = require("express").Router();
const { register, login } = require("../controllers/authController");
const auth = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/protected", auth, (req, res) => {
  res.json({ message: "Protected route accessed successfully" });
});

module.exports = router;