import React from 'react';
import Record from './log-object-entries'

export default class Log extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstName: '',
            lastName: '',
            age: undefined,
        };

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.fireLog = this.fireLog.bind(this);
        this.makePerson = this.makePerson.bind(this);
    }
    handleChangeFirstName(event , param){
        console.log(event, param)
        this.setState({person: {firstName: event.target.value}});
    }
    makePerson(type){
        let person = {};
        person.age = this.state.age;
        person.firstName = this.state.firstName;
        person.lastName = this.state.lastName;
        type==='{}' ? this.fireLog(person): this.fireLog(person,'style');
    }
    fireLog(person, style){
        style? console.log('style %c %s'):
        console.log({person});
    }
    callbackFunction = (childData, type) => {
        console.log({childData}, {type})
        type==='firstName' ?          this.setState({firstName: childData}):
            type==='lastName' ?         this.setState({lastName: childData}):
                this.setState({age: childData});
        console.log('this.state', this.state);
    };
        // this.setState({{person: {firstName: event.target.value}: childData})
    render() {
        return (
            <React.Fragment>
                <h1>Console.log</h1>
                <h2>object person;</h2>
                <div  className={"log-input"}>
                    <p>person.firstName</p>
                    {/*<input type="text" value={this.state.person.firstName} onChange= />*/}
                </div>
                    <Record parentCallback={this.callbackFunction} type="firstName"/>
                    <Record parentCallback={this.callbackFunction} type="lastName"/>
                    <Record parentCallback={this.callbackFunction} type="age"/>
                {this.state.firstName}'esa'{this.state.lastName}'dsa'{this.state.age }
                <button onClick={this.makePerson('{}')}>Click to fire log</button>
                <button onClick={this.makePerson('style')}>style</button>
                </React.Fragment>
        )
    }
}