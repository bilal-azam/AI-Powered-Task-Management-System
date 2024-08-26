const express = require('express');
const { getWishlist } = require('../controllers/wishlistController');
const router = express.Router();

router.get('/', getWishlist);

module.exports = router;