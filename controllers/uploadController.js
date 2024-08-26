const upload = require('../services/uploadService');

const uploadFile = (req, res) => {
    upload.single('file')(req, res, (err) => {
        if (err) {
            return res.status(400).send(err.message);
        }
        res.status(200).send('File uploaded successfully');
    });
};

module.exports = { uploadFile };