import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class Splash extends React.Component{
  render () {
    return (
      <div className="container container-table">
        <div className="row vertical-center-row">
        <h1 className="display-1 text-center">Poll Your Audience and get Live Feedback with Resio Polls</h1>
          <div className="text-center col-md-4 col-md-offset-4">
            <Link to="/create"><button className="btn start">Create Poll</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
