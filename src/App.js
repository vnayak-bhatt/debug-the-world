import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Presentation from './presentation'
import Log from './log'
import TableAssert from './table-assert'
import Time from './time'
import Group from './group'
import TraceCount from './trace-count'
import WarnError from './warn-error'

class App extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <Router>
                    <div className="App">
                        <nav>
                            <ul>

                                <li>
                                    <Link to="/log">Log</Link>
                                </li>
                                <li>
                                    <Link to="/table-assert">Table|Assert</Link>
                                </li>
                                <li>
                                    <Link to="/time">Time|TimeEnd</Link>
                                </li>
                                <li>
                                    <Link to="/group">Group</Link>
                                </li>
                                <li>
                                    <Link to="/trace-count">Trace|Count</Link>
                                </li>
                                <li>
                                    <Link to="/warn-error">Warn|Error</Link>
                                </li>
                            </ul>
                        </nav>
                        <header className="App-header">
                            <Presentation/>
                            <Switch>
                                <Route path="/" exact={true}>
                                </Route>
                                <Route path="/log">
                                    <Log/>
                                </Route>
                                <Route path="/table-assert">
                                    <TableAssert/>
                                </Route>
                                <Route exact={true} path="/time">
                                    <Time/>
                                </Route>
                                <Route exact={true} path="/group">
                                    <Group />
                                </Route>
                                <Route exact={true} path="/trace-count">
                                    <TraceCount />
                                </Route>
                                <Route exact={true} path="/warn-error">
                                    <WarnError />
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
