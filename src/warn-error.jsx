import React from 'react';

export default class WarnError extends React.Component {
    constructor(props) {
        super(props);
        this.handleWarning = this.handleWarning.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleError() {
        console.error('this is error');
    }

    handleWarning() {
        console.warn('this is Warning');
    }

    render() {
        return (
            <React.Fragment>
                <div className="flex-it">
                <button onClick={this.handleWarning}>Fire Warning</button>
                <button onClick={this.handleError}>Fire Error</button>
                </div>
            </React.Fragment>
        );
    }
}


