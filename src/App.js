import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Presentation from './presentation'
import Log from './log'

class App extends React.Component {

  render(){
      return (
          <div className="wrapper">
            <Router>
              <div className="App">
                  <nav>
                      <ul>
                          <li >
                              <Link to="/home">Home</Link>
                          </li>
                          <li >
                              <Link to="/log">Log</Link>
                          </li>
                          <li >
                              <Link to="/header">Header</Link>
                          </li>
                          <li >
                              <Link to="/todoclass">Todo</Link>
                          </li>
                      </ul>
                  </nav>
                  <header className="App-header">
                  <Switch>
                      <Route path="/home">
                          <Presentation />
                      </Route>
                      <Route path="/" exact={true}>
                          <Presentation />
                      </Route>
                      <Route path="/log">
                          <Log />
                      </Route>
                  </Switch>
                </header>
                  <footer>
                      Created by : Vinayak Yuvraj Bhatt (Software Developer and JS enthusiast)
                                    Habilelabs.io
                  </footer>
              </div>
            </Router>
          </div>
      );
  }
}

export default App;
