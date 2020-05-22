import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './containers/home/Home';
import About from './containers/about/About';
import Contact from './containers/contact/Contact';
import Projects from './containers/projects/Projects';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route  path="/about-me" component={About} />
          <Route  path="/contact-me" component={Contact} />
          <Route  path="/my-projects" component={Projects} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
