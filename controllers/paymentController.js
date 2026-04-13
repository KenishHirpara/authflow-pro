exports.mockPayment = (req, res) => {
  const { amount } = req.body;

  if (amount > 0) {
    res.json({
      status: "SUCCESS",
      transactionId: "TXN" + Date.now()
    });
  } else {
    res.status(400).json({ status: "FAILED" });
  }
};