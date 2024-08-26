const express = require('express');
const { getOrder } = require('../controllers/orderController');
const router = express.Router();

router.get('/:orderId', getOrder);

module.exports = router;