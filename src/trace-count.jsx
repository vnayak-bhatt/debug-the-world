import React from 'react';

export default class TraceCount extends React.Component {
    constructor(props) {
        super(props);
        this.foo= this.foo.bind(this);
        this.bar= this.bar.bind(this);
        this.fooBar= this.fooBar.bind(this);
        console.count('foobar called')
    }

    foo() {
      this.bar();
    }

    bar() {
        this.fooBar();
    }

    fooBar() {
        console.trace('trace the path of fooBar')
        console.count('foobar called')
    }

    render() {
        return (
            <React.Fragment>
                <h1>trace the path of fooBar and count it</h1>
                <button onClick={this.foo}>Call Foo</button>
            </React.Fragment>
        );
    }
}