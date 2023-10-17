const Message = require('../models/message');
const asyncHandler = require('express-async-handler');

exports.index = asyncHandler(async (req, res, next) => {
	const allMessages = await Message.find().exec();
	res.render('index', { title: 'Message Board', message_list: allMessages });
});

exports.message_form_post = asyncHandler(async (req, res, next) => {
	const message = new Message({
		user_name: req.body.user_name,
		message: req.body.message,
	});
	console.log(req.body);
	await message.save();
	res.redirect('/');
});

exports.message_form_get = (req, res, next) => {
	res.render('form', { title: 'Post a Message' });
};
