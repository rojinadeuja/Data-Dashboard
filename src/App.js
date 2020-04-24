import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import to use bootstrap's CSS classes
import {BrowserRouter as Router, Route, Link} from "react-router-dom"; //Import to add routing configuration to App.js

import Dashboard from "./components/business.component"; //Import the dashboard component

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="container">
          <p>YELP TOPIC MODELLING</p>
        </div>
      </Router>
    )
  }
}

export default App;
