const express = require('express');
const router = express.Router();
const Poll = require('../models/pollSchema');

// get questions from db based on url id and send it to Presenter Dashboard
router.get('/:id', function(req, res) {
	Poll.findOne({"_id" : req.params.id}, function(err, polls) {
    if(err) console.error(err);
    res.send(polls);
  });
});

// create schema and post into database with a generated id
router.post('/create', function(req, res) {
  Poll.create({questions: req.body},function(err, data) {
		if(err) console.error(err);
    res.send(data);
	})
});

module.exports = router;
