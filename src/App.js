import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Link } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <nav>        
        <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/strictAccess">StrictAccess</Link></li>
        </ul>
        </nav>
        <Switch>
          <Route exact path="/users/:id" render={() => <Users greetingMessage="Good Morning" />} />
          <Route path="/strictAccess" render={() => (
            <StrictAccess user={ {username:'joao', password:'1234' } } /> 
          )} />
          <Route exact path="/about" component={About} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
