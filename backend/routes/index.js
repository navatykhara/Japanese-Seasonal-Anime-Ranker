const fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("Testing")
});

router.get('/get', function(req, res, next) {
	console.log("SENDING")
	var data = JSON.parse(fs.readFileSync('public/topten_data.json', 'utf-8'))
	res.json(data);
});

module.exports = router;
