var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
	var data = {
		title : 'Hi',
		description: 'Choose your device from the menu above!',
		layout: 'main'
	};
	res.render('index', data);
});

module.exports = router;
