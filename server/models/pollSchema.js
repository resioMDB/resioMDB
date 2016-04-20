const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const QuestionSchema = require('./questionSchema');

const pollSchema = new Schema({
	// push array of question objects into schema
	// id automaticaly generated
	question: {type: Schema.Types.Mixed, required: true}
});

const Poll = mongoose.model('Poll', pollSchema);

module.export = Poll;