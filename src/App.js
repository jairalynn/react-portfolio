/* eslint-disable no-unused-vars */
import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <ul>
          <li>
            <Link to="/">Jaira Arcilla</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/portfolio" component={Portfolio}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
