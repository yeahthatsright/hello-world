import React from 'react';
import AwesomeComponent from './awesome.jsx';
import 'jquery';
import 'bootstrap-loader';

class App extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <p>Howya React!</p>
          <div className="container">
            <AwesomeComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
