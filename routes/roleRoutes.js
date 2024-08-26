const express = require('express');
const router = express.Router();
const { createRole } = require('../controllers/roleController');

router.post('/roles', createRole);

module.exports = router;