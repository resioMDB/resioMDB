import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Presenter-Dashboard.jsx'
//require in rd3 which gives access to react components 'PieChart' and 'BarChart'
import { BarChart, PieChart } from 'react-d3';
//establishes the two types of charts we will be using

class CreateGraph extends React.Component{
  constructor(props) {
    super(props);
    this.state = {graph: ''}

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
    choice[this.refs.answer4.value] = 0;
    choice[this.refs.answer5.value] = 0;

    delete choice[''];

    $(evt.target).parent().parent().parent().children('.chart-options-overlay').css({'background-color': '#FF5A5F', visibility: 'visible', 'z-index': 20});

    var type = this.state.graph === 'chart-options-bar-overlay' ? 'bar' : 'pie';
    var questions = [{
                      cType: type, question: this.refs.question.value,
                      choices: [choice],
                      qType: 'multiple'
                    }];
    this.props.getData(questions);
  }

  submitGraph(evt) {
    if(!this.state.graph) {
      evt.target.style.background = '#FF5A5F';
      this.setState({graph: evt.target.className});
    }

    if(evt.target.className === this.state.graph) {
      return;
    } else if(this.state.graph === 'chart-options-pie-overlay') {
      $(evt.target).parent().find('.chart-options-pie-overlay').css('background-color', 'white');
      $(evt.target).parent().find('.chart-options-bar-overlay').css('background-color', '#FF5A5F');
      this.setState({graph: 'chart-options-bar-overlay'});
    } else if(this.state.graph === 'chart-options-bar-overlay') {
      $(evt.target).parent().find('.chart-options-bar-overlay').css('background-color', 'white');
      $(evt.target).parent().find('.chart-options-pie-overlay').css('background-color', '#FF5A5F');
      this.setState({graph: 'chart-options-pie-overlay'});
    }


  }

  render () {
    let pieData = [{label: 'Option 1', value: 20.0},{label: 'Option 2', value: 55.0},{label: 'Option 3', value: 25.0 }];
    let barData = [{label: 'Options', values :[{x: 'Option 1', y: 5}, {x: 'Option 2', y: 6}, {x: 'Option 3', y: 7}]}];

    return (
      <div id='graphText'>
        <div className="chart-options-overlay">
          <h1>Chart Created.</h1>
        </div>
        <div className="chart-options">
          <div className="chart-inputs">
            <form onSubmit={this.submitForm}>
              <span>Title:</span><input className="form-control" ref="question" />
              <span>Answer:</span><input className="form-control" ref="answer1" />
              <span>Answer:</span><input className="form-control" ref="answer2" />
              <span>Answer:</span><input className="form-control" ref="answer3" />
              <span>Answer:</span><input className="form-control" ref="answer4" />
              <span>Answer:</span><input className="form-control" ref="answer5" />
              <button className="btn" type='submit' value='submit'>Create</button>
            </form>
          </div>
          <div onClick={this.submitGraph} className="chart-options-pie-overlay" />
          <div  className="chart-options-pie">
            <PieChart data={pieData} width={300} height={300} radius={100} innerRadius={20} sectorBorderColor="white" title="Pie Chart" />
          </div>
          <div onClick={this.submitGraph} className="chart-options-bar-overlay" />
          <div className="chart-options-bar">
            <BarChart data={barData} width={400} height={150} fill={'#3182bd'} title='Bar Chart'/>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateGraph;


