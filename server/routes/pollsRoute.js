const express = require('express');
const router = express.Router();
const Poll = require('../models/pollSchema');

// get questions from db based on url id and send it to Presenter Dashboard
// router.get('/:id', function(req, res) {
// 		// FIND DATA BY ID
// 		var pollArr = db.collection('resiodb').find("_id" : INSERT ID HERE);
// });

// create schema and post into database with a generated id
router.post('/create', function(req, res) {

  console.log(req.body);
  // Poll.create(req.body,function(err, data) {
	// 	if(err) console.error(err);

 //    console.log(data);
	// })
});

// router.get('/inputquestions', function(req, res) {
// 	db.newPoll.update(
//    { _id: INPUT ID HERE },
//    { $set:
//       {
//         questions: [INPUT QUESTION OBJECTS HERE],
//       }
//    }
// )
// })


module.exports = router;
