const router = require("express").Router();
const { mockPayment } = require("../controllers/paymentController");

router.post("/pay", mockPayment);

module.exports = router;