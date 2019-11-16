import React from 'react';

export default class Group extends React.Component {
    constructor(props) {
        super(props);
        this.fireLog = this.fireLog.bind(this);

    }

    fireLog(){
        let test = 121;
        console.info( test);
        console.log('tesdasdat');

        console.log('-----------------------------------------');
        console.log("This is the zero level");
        console.group("First group");
        console.log("In the first level group");
        console.groupCollapsed("Second group");
        console.log("In the second level group");
        console.warn("Still in the second level group");
        console.groupEnd();
        console.log("Back to the first level group");
        console.groupEnd();
        console.log("Back to the zero level");
    }

    render() {
        return (
            <React.Fragment>
                <h1> group component</h1>
                <button onClick={this.fireLog}>Group Log Example</button>
            </React.Fragment>
        );
    }
}