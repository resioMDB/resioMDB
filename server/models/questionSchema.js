const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create question schema
// const questionSchema = new Schema({
// 	cType : {type: String, required: true},
// 	question: {type: String, required: true},
// 	choices: {type: Schema.Types.Mixed, required: true},
// 	qtype: {type: String, required: true}
// });

const questionSchema = new Schema({
  questions: []
});

const Questions = mongoose.model('Questions', questionSchema);

module.export = Questions;
