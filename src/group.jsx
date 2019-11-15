import React from 'react';

export default class Group extends React.Component{
    constructor(props){
        super(props);
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
    render(){
        return(<h1> group component</h1>)
    }
}