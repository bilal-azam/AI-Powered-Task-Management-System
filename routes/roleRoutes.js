const express = require('express');
const router = express.Router();
const { createRole, getRoles } = require('../controllers/roleController');

router.post('/create', createRole);
router.get('/', getRoles);

module.exports = router;