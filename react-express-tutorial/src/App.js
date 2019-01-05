import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
// import logo from './logo.svg';
import './App.css';
import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';
import IndexComponent from './components/IndexComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href='#' className="navbar-brand">React Express App</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="navitem"><Link to={'/'} className="nav-link">Home</Link></li>
                <li className="navitem"><Link to={'/create'} className="nav-link">Create</Link></li>
                <li className="navitem"><Link to={'/index'} className="nav-link">List</Link></li>
                <li className="navitem"><Link to={'/edit'} className="nav-link">Edit</Link></li> 
              </ul>
              <hr/>
            </div>
          </nav>
          <Switch>
            <Route exact path='/create' component={CreateComponent} />
            <Route path='/edit/:id' component={EditComponent}/>
            <Route path='/index' component={IndexComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
