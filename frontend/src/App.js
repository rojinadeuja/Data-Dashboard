import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //Import to use bootstrap's CSS classes
import {BrowserRouter as Router, Route, Link} from "react-router-dom"; //Import to add routing configuration to App.js
import logo from "./yelp_logo.png"; //Import yelp logo
import Dashboard from "./components/Dashboard.component"; //Import the dashboard component
import Coherence from './components/Coherence.component'; //Import the business component


class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.yelp.com/">
            <img src={logo} width="400" height="200" alt="Yelp.com"/>
          </a>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collpase navbar-collapse">
            <ul className= "navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Yelp Topic Modeling</Link>
              </li>
              <li className="navbar-item">
                <Link to="/topic_details" className="nav-link">Topic Coherence</Link>
              </li>
            </ul>
            </div>
          </nav>
          <br/>
          {/* Add Routes Here */}
          <Route path="/" exact component={Dashboard}/>
          <Route path="/topic_details" exact component={Coherence}/>
        </div>
      </Router>
    )
  }
}

export default App;
