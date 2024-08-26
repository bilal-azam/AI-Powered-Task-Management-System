const express = require('express');
const router = express.Router();
const upload = require('../middlewares/fileValidationMiddleware');

router.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully');
});

module.exports = router;