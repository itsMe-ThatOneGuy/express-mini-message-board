const express = require('express');
const router = express.Router();

const message_controller = require('../controllers/messageController');

router.get('/', message_controller.index);

router.get('/new', message_controller.message_form_get);

router.post('/new', message_controller.message_form_post);

module.exports = router;
