const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    user_name: { type: String, required: true, maxLength: 100 },
    message: { type: String, requireed: true, maxLength: 100 },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('message', MessageSchema);
