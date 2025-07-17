const express = require("express");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

// Protected Route
router.post('/add-to-cart', protect, (req, res) => {
  const { productId, quantity } = req.body;
  res.status(200).json({
    message: `Product ${productId} added to cart by ${req.user.name}`,
    userId: req.user._id,
    quantity,
  });
});

module.exports = router;