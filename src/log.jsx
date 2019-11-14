import React from 'react';
import Record from './log-object-entries'

export default class Log extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: undefined,
        };

        this.fireLog = this.fireLog.bind(this);
        this.fireLogStyle = this.fireLogStyle.bind(this);
    }

    fireLog() {
        let person = {};
        person.firstName = this.state.firstName;
        person.lastName = this.state.lastName;
        console.log({person});
    }

    fireLogStyle() {
        let stylistPerson = {};
        stylistPerson.firstName = this.state.firstName;
        stylistPerson.lastName = this.state.lastName;
        console.log( '%c My name is %s %s', 'color: red; background-color: black; font-weight: bold',stylistPerson.firstName, stylistPerson.lastName);
    }

    callbackFunction = (childData, type) => {
        console.log({childData}, {type}, 'data received from child component');
        type === 'firstName' ? this.setState({firstName: childData}) :
            type === 'lastName' ? this.setState({lastName: childData}) :
                this.setState({age: childData});
        console.log('this.state', this.state);
    };
    render() {
        return (
            <React.Fragment>
                <h1>Console.log</h1>
                <h2>object person;</h2>
                <div className={"log-input"}>
                </div>
                <Record parentCallback={this.callbackFunction} type="firstName"/>
                <Record parentCallback={this.callbackFunction} type="lastName"/>
                {/*<Record parentCallback={this.callbackFunction} type="age"/>*/}
                <button onClick={this.fireLog}>click to fire log</button>
                <button onClick={this.fireLogStyle}>style</button>
            </React.Fragment>
        )
    }
}