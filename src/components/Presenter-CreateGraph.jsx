import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Presenter-Dashboard.jsx'
import {Link} from 'react-router';
import CreateComponent from './Presenter-CreateComponent.jsx'
const socket = io();
//require in rd3 which gives access to react components 'PieChart' and 'BarChart'
import { BarChart, PieChart } from 'react-d3';
//establishes the two types of charts we will be using

class CreateGraph extends React.Component{
  constructor(props) {
    super(props);
    this.state = {questions: []}

    //needed to retain the value of 'this' because it's within the socket callback
    //we change a value in the 'choices' array based on an event called 'serverResponse'
    //'serverResponse' is being emitted from the server
    //need to JSON parse the data coming from the socket
    //then use that data to traverse the data structure and change the state
    //see server.js for the structure of the data
    var self = this;
    socket.on('serverResponse', function(data) {
      var parsedData = JSON.parse(data);
      var choiceMade = parsedData.choice;
      self.state.questions[parsedData.q].choices[0][choiceMade]++;
      self.setState(self.state);
    });

    this.getFormData = this.getFormData.bind(this);
  }

  getFormData(data) {
    evt.preventDefault();

    this.setState({questions : this.state.questions.concat(data)});
  }

  render () {
    let pieData = [{label: 'Margarita', value: 20.0},{label: 'John', value: 55.0},{label: 'Tim', value: 25.0 }];
    let barData = [{label: 'Options', values :[{x: 'Option 1', y: 5}, {x: 'Option 2', y: 6}, {x: 'Option 3', y: 7}]}];

    return (
      <div id='graphText'>
        <Dashboard questions = {this.state.questions} />
        <h1 className="display-1">Select and Create Your Poll Here.</h1>
        <CreateComponent />
      </div>
    )
  }
}

export default CreateGraph;


