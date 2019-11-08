import React from 'react';

export default class record extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            firstName:   ''
        };
        console.log({props}, props.type);
        this.handleChange = this.handleChange.bind(this);
    };

    sendData = (value, type) => {
        this.props.parentCallback(this.state.firstName, type);

    };
    handleChange(event , param){
            console.log({event})
            this.setState({firstName: event.target.value});
            this.sendData(this.state.firstName,this.props.type);

    }
    render() {
        return (
            <React.Fragment>
                <div className={"log-input"}>
                    <p>{this.props.type}</p>
                    <input type="text" value={this.state.firstName} onChange={(evt) => this.handleChange(evt)}/>
                </div>
            </React.Fragment>);
    }
}