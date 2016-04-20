import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Presenter-Dashboard.jsx'
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

    this.submitForm = this.submitForm.bind(this);
    this.submitGraph = this.submitGraph.bind(this);
  }

  submitForm(evt) {
    evt.preventDefault();
    var choice = {};
    choice[this.refs.answer1.value] = 0;
    choice[this.refs.answer2.value] = 0;
    choice[this.refs.answer3.value] = 0;

    var questions = [{
                      cType: 'bar', question: this.refs.question.value,
                      choices: [choice],
                      qType: 'multiple'
                    }];

    this.setState({questions});
  }

  submitGraph(evt) {
    console.log(this.state);
    // evt.target.style.background = '#FF5A5F';
    // if(this.state.currentSelection === 'chart-options-pie') {
    //   $('.chart-options-bar').css({'background-color': 'white'});
    // }
  }

  render () {
    let pieData = [{label: 'Option 1', value: 20.0},{label: 'Option 2', value: 55.0},{label: 'Option 3', value: 25.0 }];
    let barData = [{label: 'Options', values :[{x: 'Option 1', y: 5}, {x: 'Option 2', y: 6}, {x: 'Option 3', y: 7}]}];

    return (
      <div id='graphText'>
        <h1 className="display-1">Select and Create Your Poll Here.</h1>
        <div className="chart-options">
          <div className="chart-inputs">
            <form onSubmit={this.submitForm}>
              <span>Title:</span><input ref="question" />
              <span>Answer:</span><input ref="answer1" />
              <span>Answer:</span><input ref="answer2" />
              <span>Answer:</span><input ref="answer3" />
              <button className="btn start" type='submit' value='submit'>Create</button>
            </form>
          </div>
          <div onClick={this.submitGraph} className="chart-options-pie">
            <PieChart data={pieData} width={300} height={300} radius={100} innerRadius={20} sectorBorderColor="white" title="Pie Chart" />
          </div>
          <div onClick={this.submitGraph} className="chart-options-bar">
            <BarChart data={barData} width={400} height={150} fill={'#3182bd'} title='Bar Chart'/>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateGraph;


