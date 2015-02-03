var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
	var data = {
		title : 'Click',
		description: 'Click the button below to start the animation on your desktop',
		button: 'Click to animate',
		layout: 'mobile'
	};
	res.render('mobile', data);
});

module.exports = router;
