const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	user_name: { type: String, required: true, maxLength: 100 },
	message: { type: String, requireed: true, maxLength: 100 },
	date: { type: Date, default: Date.now },
});

MessageSchema.virtual('date_formatted').get(function () {
	return DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATETIME_MED);
});

module.exports = mongoose.model('Message', MessageSchema);
