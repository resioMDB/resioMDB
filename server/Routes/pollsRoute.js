const express = require('express');
const router = express.Router();
const Poll = require('./modules/pollSchema');

// get questions from db based on url id and send it to Presenter Dashboard
router.get('/:id', function(req, res) {
	var findPoll = function(db, callback) {
		// FIND DATA BY ID
		var pollArr = db.collection('resiodb').find("_id" : INSERT ID HERE);
		
		pollArr.each(function(err, data) {
			assert.equal(err, null);
			// NEED TO GET DATA HERE
		})
		
	}

});

// create schema and post into database with a generated id
router.get('/create', function(req, res) {
	var newPoll = new Poll({
		questions: [];
	});
	
	newPoll.save(function(err) {
		if(err) console.error(err);
	})
});

router.get('/inputquestions', function(req, res) {
	db.newPoll.update(
   { _id: INPUT ID HERE },
   { $set:
      {
        questions: [INPUT QUESTION OBJECTS HERE],
      }
   }
)
})