import React from 'react';
import Graphs from './Presenter-Graphs.jsx';
const socket = io();

class Dashboard extends React.Component{

  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div>
        <Graphs questions={this.props.questions} />
      </div>
    );
  }
}

export default Dashboard;
