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

        if (this.state.firstName || this.state.lastName) {
            let person = {};
            person.firstName = this.state.firstName;
            person.lastName = this.state.lastName;
            console.log({person});
        }
    }

    fireLogStyle() {
        console.todo = function(msg) {
            console.log('%c %s %s %s', 'color: yellow; background-color: black;', '--', msg, '--');
        };
        console.important = function(msg){
            console.log('%c %s %s %s', 'color: brown; font-weight: bold; text-decoration: underline;', '--', msg, '--');
        }
        if (this.state.firstName || this.state.lastName) {
            let stylistPerson = {};
            stylistPerson.firstName = this.state.firstName;
            stylistPerson.lastName = this.state.lastName;
            let str = stylistPerson.firstName + ' ' +stylistPerson.lastName
            console.todo(str);
            console.important(str);
        }
    }

    callbackFunction = (childData, type) => {
        type === 'person.firstName' ? this.setState({firstName: childData}) :
            type === 'person.lastName' ? this.setState({lastName: childData}) :
                this.setState({age: childData});

    };

    render() {


        return (
            <React.Fragment>
                <h1>LOG Component</h1>
                <h2>Console.log</h2>
                <h4>object person;</h4>
                <div className={"log-input"}>
                </div>
                <Record parentCallback={this.callbackFunction} type="person.firstName"/>
                <Record parentCallback={this.callbackFunction} type="person.lastName"/>
                {/*<Record parentCallback={this.callbackFunction} type="age"/>*/}
                <div className='flex-it'>
                    <button onClick={this.fireLog}>Fire Log</button>

                    <button onClick={this.fireLogStyle}>Do it With Style</button>

                </div>
            </React.Fragment>
        )
    }
}