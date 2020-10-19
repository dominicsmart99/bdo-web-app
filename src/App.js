import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import Dashboard from "./components/dashboard.component";           
import EnhanceCalc from "./components/enhance-calc.component"; 
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">BDO Web App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/enhance" className="nav-link">Enhancement Calc</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">TBA</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={Dashboard} />
          <Route path="/enhance" component={EnhanceCalc} />
        </div>
      </Router>
      
    );
  }
}

export default App;

