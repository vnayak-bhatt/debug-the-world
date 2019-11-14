import React from 'react';

export default class record extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value:   ''
        };
        this.handleChange = this.handleChange.bind(this);
    };

    sendData = (value, type) => {
        this.props.parentCallback(value, type);

    };
    handleChange(event , param){
            this.setState({value: event.target.value});
            this.sendData(event.target.value,this.props.type);

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