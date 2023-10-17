const Message = require('../models/message');
const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

exports.index = asyncHandler(async (req, res, next) => {
	const allMessages = await Message.find().exec();
	res.render('index', { title: 'Message Board', message_list: allMessages });
});

exports.message_form_post = [
	body('user_name')
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage('Username must not be empty'),
	body('message')
		.trim()
		.isLength({ min: 1 })
		.escape()
		.withMessage('Message must not be empty'),

	asyncHandler(async (req, res, next) => {
		const errors = validationResult(req);

		const message = new Message({
			user_name: req.body.user_name,
			message: req.body.message,
		});

		if (!errors.isEmpty()) {
			res.render('form', {
				title: 'Post a message',
				message: message,
				errors: errors.array(),
			});
			return;
		} else {
			await message.save();
			res.redirect('/');
		}
	}),
];

exports.message_form_get = (req, res, next) => {
	res.render('form', { title: 'Post a Message' });
};
