const express = require('express');
const router = express.Router();
const Poll = require('./modules/pollSchema');

// get questions from db based on url id and send it to Presenter Dashboard
router.get('/:id', function(req, res) {
	// get access to questions based on incoming id and send it over
	// to Presenter Dashboard
	// if user changes data we have to get the data out of
	var findPoll = function(db, callback) {
		// FIND DATA BY ID
		var pollArr = db.collection('resiodb').find("_id" : INSERT ID HERE);
		
		pollArr.each(function(err, data) {
			assert.equal(err, null);
			// NEED TO GET DATA HERE
		})
		
	}
	
	var findRestaurants = function(db, callback) {
   	var cursor =db.collection('restaurants').find( );
   	cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
	};
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