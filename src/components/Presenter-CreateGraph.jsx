import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Presenter-Dashboard.jsx'
import {Link} from 'react-router';
import axios from 'axios';
import CreateComponent from './Presenter-CreateComponent.jsx'
const socket = io();
//require in rd3 which gives access to react components 'PieChart' and 'BarChart'
import { BarChart, PieChart } from 'react-d3';
//establishes the two types of charts we will be using

class CreateGraph extends React.Component{
  constructor(props) {
    super(props);
    this.state = {questions: [], queuedQuestions: [], showComponents: true, id: ''}

    this.getFormData = this.getFormData.bind(this);
    this.publishCharts = this.publishCharts.bind(this);
  }

  getFormData(data) {
    this.setState({queuedQuestions : this.state.queuedQuestions.concat(data)});
  }

  publishCharts() {
    console.log(this.state.queuedQuestions)
    // axios.post('/polls/create', this.state.queuedQuestions).then( (response) => {
    //   this.setState({id: response.data._id});
    // });
    this.setState({questions: this.state.queuedQuestions, showComponents: false})
  }

  render () {
    let pieData = [{label: 'Margarita', value: 20.0},{label: 'John', value: 55.0},{label: 'Tim', value: 25.0 }];
    let barData = [{label: 'Options', values :[{x: 'Option 1', y: 5}, {x: 'Option 2', y: 6}, {x: 'Option 3', y: 7}]}];
    let testId = 'dmn12d92'
    return (
      <div id='graphText'>
        {!this.state.showComponents ? <Link to={{ pathname: 'dash', query: { id: this.state.id } }}><div className="go-charts"><h1 className="h1-charts">Go to Charts!</h1></div></Link> : ''}
        {this.state.showComponents ? <button onClick={this.publishCharts} className="btn publish">Publish Charts</button>: ''}
        {this.state.showComponents ?  <h1 className="display-1 select-polls">Select and Create Your Poll Here.</h1> : ''}
        {this.state.showComponents ? <CreateComponent getData = {this.getFormData}/> : ''}
        {this.state.showComponents ? <CreateComponent getData = {this.getFormData}/> : ''}
        {this.state.showComponents ? <CreateComponent getData = {this.getFormData}/> : ''}
      </div>
    )
  }
}

export default CreateGraph;


