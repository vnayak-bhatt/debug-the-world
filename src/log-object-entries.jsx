import React from 'react';

export default class record extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value:   ''
        };
        console.log({props}, props.type);
        this.handleChange = this.handleChange.bind(this);
    };

    sendData = (value, type) => {
        this.props.parentCallback(this.state.value, type);

    };
    handleChange(event , param){
            console.log({event}, 'handlechange triggered at input from child component')
            this.setState({value: event.target.value});
            this.sendData(this.state.value,this.props.type);

    }
    render() {
        return (
            <React.Fragment>
                <div className={"log-input"}>
                    <p>{this.props.type}</p>
                    <input type="text" value={this.state.value} onChange={(evt) => this.handleChange(evt)}/>
                </div>
            </React.Fragment>);
    }
}