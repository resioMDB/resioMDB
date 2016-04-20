const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollSchema = mongoose.Schema({
	// push array of question objects into schema
	// id automaticaly generated
	questions: {type: Schema.Types.Mixed, required: true}
});

module.exports = mongoose.model('Poll', pollSchema);
