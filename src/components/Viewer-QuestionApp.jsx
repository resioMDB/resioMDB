import React from 'react';
// import Questions from './Viewer-Questions.jsx';
import ReactDOM from 'react-dom';
import QuestionContainer from './Viewer-QuestionContainer.jsx';
import axios from 'axios';
import { Link } from 'react-router';
const socket = io();

//This is the top level component for the viewer and holds state for all of the questions pulled from the server api.
//Structure for Viewer components:
// - > QuestionApp > Questions > QuestionContainer > Choices > Choice

class QuestionApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      hash: this.props.location.query.id
    };

    var self = this;

    axios.get('/polls/' + this.state.hash)
      .then((response) => {
        console.log("i've received questions:", response);
        self.setState({questions: response.data.questions});
        self.setInitialLS(this.state.questions.length);
    });
    // $.ajax({
    //   method: 'POST',
    //   url: '/retrieve',
    //   data: {hash: self.props.hash},
    //   success: () => {
    //     console.log("ajax succeeded");
    //   }
    // });
    // socket.on('sendQuestions', (data) => {
    //   console.log("i've received questions:", data);
    //   self.setState({questions: data});
    //   self.setInitialLS(this.state.questions.length);
    // });
  }


  submitAnswer(qIdentifier, choice) {
    console.log("called in QApp with", qIdentifier, choice);
    let response = JSON.stringify({q: qIdentifier, choice: choice, allVotes: localStorage[this.state.hash]});
    socket.emit('viewerAnswer', response);
  }

  //  Store an array in the voter's local storage. Each index of the array corresponds to the index of a question.
  //  The value at the index is initially -1 (has not voted on this question). As votes come in, the appropriate
  //  index is changed to the index of the voter's choice
  //
  //  hashKeyToBe is hard-coded in for now. Should come from URL(?)
  setInitialLS(length) {
    localStorage.setItem(this.state.hash, JSON.stringify(new Array(length)));
  }

   componentWillMount(){
     axios.get('/polls/' + this.state.hash)
       .then((response) => {
         console.log("i've received questions:", response);
         this.setState({questions: response.data.questions});
         this.setInitialLS(this.state.questions.length);
     });
   }

         /*
         localStorage takes a key and a value. Both the key and value are strings.
         Data is an object but string coercion happens in order to adapt to situation,
         and in this case it worked.
         localStorage.setItem("hashKeyToBe", data.questions.length);

         */
  //        this.setInitialLS(data.questions.length);
  //    });
  //  }

        // //Grabs questions and answer choices from server via an Ajax request and then sets the state.
        // componentWillMount(){
        //   $.ajax('/api/questions').done( data => {
        //       this.setState(data);
        //
        //       /*
        //       localStorage takes a key and a value. Both the key and value are strings.
        //       Data is an object but string coercion happens in order to adapt to situation,
        //       and in this case it worked.
        //       localStorage.setItem("hashKeyToBe", data.questions.length);
        //
        //       */
        //       this.setInitialLS(data.questions.length);
        //   });
        // }

  render() {
    const questions = this.state.questions.map((question, i) => {
      return <QuestionContainer key= {i} qIdentifier={i} question={question} hash={this.state.hash}/>
    });

    return (
      <div id="">
        {questions}
        <div className="text-center col-md-4 col-md-offset-4">
          <Link to="/thanks"><button className="btn start">Finish Poll</button></Link>
        </div>
      </div>
    );
  }
}

export default QuestionApp;
