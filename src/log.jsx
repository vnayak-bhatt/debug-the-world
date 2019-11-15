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
            let firstName = this.state.firstName;
            let lastName = this.state.lastName;
            console.log({firstName, lastName});
        }
    }

    fireLogStyle() {
        console.todo = function (msg) {
            //String substitutions %s %i %o=object %f =float
            console.log('%c %s %s %s', 'color: yellow; background-color: black;', '--', msg, '--');
        };
        console.important = function (msg) {
            console.log('%c %s %s %s', 'color: brown; font-weight: bold; text-decoration: underline;', '--', msg, '--');
        }
        if (this.state.firstName || this.state.lastName) {
            let stylistPerson = {};
            stylistPerson.firstName = this.state.firstName;
            stylistPerson.lastName = this.state.lastName;
            let str = stylistPerson.firstName + ' ' + stylistPerson.lastName
            console.todo(str);
            console.important(str);
        }
    }

    callbackFunction = (childData, type) => {
        type === 'firstName' ? this.setState({firstName: childData}) :
            type === 'lastName' ? this.setState({lastName: childData}) :
                this.setState({age: childData});

    };

    render() {


        return (
            <React.Fragment>
                <div className={"log-input"}>
                </div>
                <Record parentCallback={this.callbackFunction} type="firstName"/>
                <Record parentCallback={this.callbackFunction} type="lastName"/>
                {/*<Record parentCallback={this.callbackFunction} type="age"/>*/}
                <div className='flex-it'>
                    <button onClick={this.fireLog}>Fire Log</button>

                    <button onClick={this.fireLogStyle}>Do it With Style</button>

                </div>
            </React.Fragment>
        )
    }
}