const Message = require('../models/Message');

const sendMessage = async (req, res) => {
    const { from, to, text } = req.body;
    try {
        const message = new Message({ from, to, text });
        await message.save();
        res.json(message);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getMessages = async (req, res) => {
    const { userId } = req.params;
    try {
        const messages = await Message.find({ $or: [{ from: userId }, { to: userId }] });
        res.json(messages);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { sendMessage, getMessages };