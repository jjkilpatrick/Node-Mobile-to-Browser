var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
	var data = {
		title : 'Desktop',
		layout: 'desktop'
	};
	res.render('desktop', data);
});

module.exports = router;