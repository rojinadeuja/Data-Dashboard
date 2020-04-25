import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import to use bootstrap's CSS classes
import {BrowserRouter as Router, Route, Link} from "react-router-dom"; //Import to add routing configuration to App.js

import logo from "./yelp_logo.png"; //Import yelp logo

import Dashboard from "./components/dashboard.component"; //Import the dashboard component
import Business from './components/business.component'; //Import the business component


class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="container">
          <a class="navbar-brand" href="https://www.yelp.com/" target="_blank">
            <img src={logo} width="400" height="200" alt="Yelp.com"/>
          </a>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <Link to="/" className="nav-link">Yelp Data Dashboard</Link> */}
            <div className="collpase navbar-collapse">
            <ul className= "navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Yelp Data Dashboard</Link>
              </li>
              <li className="navbar-item">
                <Link to="/businesses" className="nav-link">Businesses</Link>
              </li>
            </ul>
            </div>
          </nav>
          <br/>
          {/* Add Routes Here */}
          <Route path="/" exact component={Dashboard}/>
          <Route path="/businesses" exact component={Business}/>
        </div>
      </Router>
    )
  }
}

export default App;
