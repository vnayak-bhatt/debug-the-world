import React from 'react';

export default class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: undefined,
            total: 0
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInput(e) {
        this.setState({value: e.target.value})
    }

    handleClick(e) {
        console.log('time started')
        console.time('for');
        let sum = 0;
        for (let i = 1; i <= this.state.value; i++) {
            if (i === this.state.value / 2) {
                console.timeLog('for', 'timeLog');
            }
            sum += i;
        }
        this.setState({total: sum})
        console.timeEnd('for');
        console.log('time ended')

    }

    render() {
        let displaySum = this.state.total;
        return (
            <React.Fragment>
                <h1>For loop to calculate the sum</h1>
                <input onChange={this.handleInput}/>
                <button onClick={this.handleClick}>run loop</button>
                sum = {displaySum}
            </React.Fragment>
        );
    }
}