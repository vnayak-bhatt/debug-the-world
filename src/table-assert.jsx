import React from 'react';

export default class TableAssert extends React.Component {
    constructor(props) {
        super(props);
        console.log('assert log component');
        this.state = {
            value: '',
            condition: true
        };
        this.handleAOB = this.handleAOB.bind(this);
        this.handleA = this.handleA.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleAssert = this.handleAssert.bind(this);
        this.fireAssert = this.fireAssert.bind(this);
    }

    handleAOB() {
        let team = [
            {name: 'Balgopal', project: 'Denthub', id: 11},
            {name: 'Yash', project: 'Caseyun', id: 47},
            {name: 'V-Nayak', project: 'Caseyun', id: 57},
        ];
        console.log({team});
        console.table(team);
        // console.table(team, ['name', 'project']);
        // console.table({name: 'V-Nayak', project: 'Caseyun', id: 57})
    }

    handleA() {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        console.log({arr});
        console.table(arr);
    }

    handleInput(e) {
        this.setState({value: e.target.value});
    }

    handleAssert() {
        this.state.condition ? this.setState({condition: false}) : this.setState({condition: true});
    }
    fireAssert(){
        console.assert(this.state.condition , this.state.value + "fired when condition is" + this.state.condition);

    }
    render() {
        let conditionVar
        this.state.condition ? conditionVar = <button onClick={this.handleAssert}>toggle true</button> : conditionVar =<button onClick={this.handleAssert}>toggle false</button>;

            return (
                <React.Fragment>
                    <h1>table</h1>
                    <div className="flex-it">
                    <button onClick={this.handleAOB}>Array of Objects</button>
                    <button onClick={this.handleA}>Array</button>
                    </div>
                    <h1>-----------------------------------------</h1>
                    <h1>Assert</h1>
                    <input onChange={this.handleInput}/>
                    <div className="flex-it">
                    {conditionVar}
                    <button onClick={this.fireAssert}>fire Assert</button>
                    </div>
                    </React.Fragment>
            );
    }
}