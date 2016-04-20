import React from 'react';
import Graphs from './Presenter-Graphs.jsx';
import {Link} from 'react-router';
import axios from 'axios';
const socket = io();

class Dashboard extends React.Component{

  constructor(props) {
    super(props);
    this.state = {questions: []};
    //needed to retain the value of 'this' because it's within the socket callback
    //we change a value in the 'choices' array based on an event called 'serverResponse'
    //'serverResponse' is being emitted from the server
    //need to JSON parse the data coming from the socket
    //then use that data to traverse the data structure and change the state
    //see server.js for the structure of the data
    var self = this;
    socket.on('updatePresenter', function(data) { // newArr with choice,
      var parsedData = JSON.parse(data);
      var newChoice = parsedData.choice;

      if (parsedData.oldChoice) {
        self.state.questions[parsedData.q].choices[0][parsedData.oldChoice]--;
      }
      self.state.questions[parsedData.q].choices[0][newChoice]++;

      self.setState(self.state);


    });
    this.test = this.test.bind(this);
  }

  //make a call to the server to grab the questions
  //set those questions as the state and send them down to the next component
  componentWillMount() {
    axios.get('/polls/' + this.props.location.query.id).then( (response) => {
      console.log(response.data.questions);
      this.setState({questions : response.data.questions});
    });
  }

  test() {
    console.log(this.state);
  }

  render () {
        console.log(this.props.location.query.id);
    return (
      <div>
        <h1>localhost:3000/#/viewer/?id={this.props.location.query.id}</h1>
        <Graphs questions={this.state.questions} />
        <button onClick={this.test}>press</button>
      </div>
    );
  }
}

export default Dashboard;
