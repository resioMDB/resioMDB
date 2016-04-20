import React from 'react';
import Questions from './Viewer-Questions.jsx';
const socket = io();

//This is the top level component for the viewer and holds state for all of the questions pulled from the server api.
//Structure for Viewer components:
// - > QuestionApp > Questions > QuestionContainer > Choices > Choice

class QuestionApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { questions: [] };

    // Doesn't work here!!!
    // socket.on('updateLS', function(newChoiceArr) {
    //   var hashKeyToBe = "changethis!!";
    //   localStorage.setItem(hashKeyToBe, newChoiceArr);
    // });
  }


  submitAnswer(qIdentifier, choice) {
    console.log("called in QApp with", qIdentifier, choice);
    let response = JSON.stringify({q: qIdentifier, choice: choice, allVotes: localStorage["changethis!!"]});
    socket.emit('viewerAnswer', response);
  }

  //  Store an array in the voter's local storage. Each index of the array corresponds to the index of a question.
  //  The value at the index is initially -1 (has not voted on this question). As votes come in, the appropriate
  //  index is changed to the index of the voter's choice
  //
  //  hashKeyToBe is hard-coded in for now. Should come from URL(?)
  setInitialLS(length) {
    var hashKeyToBe = "changethis!!";
    localStorage.setItem(hashKeyToBe, JSON.stringify(new Array(length)));
  }

  //Grabs questions and answer choices from server via an Ajax request and then sets the state.
  componentWillMount(){
    $.ajax('/api/questions').done( data => {
        this.setState(data);
        /*
        localStorage takes a key and a value. Both the key and value are strings.
        Data is an object but string coercion happens in order to adapt to situation,
        and in this case it worked.
        localStorage.setItem("hashKeyToBe", data.questions.length);

        */
        this.setInitialLS(data.questions.length);
    });
  }

  render() {
    return (
      <div id="">
        <Questions questionState={this.state.questions}/>
      </div>
    );
  }
}

export default QuestionApp;
