import React, { Component } from 'react';


export class RegComp extends Component {
   
    render() {
        console.log("RegComp component **** render")
        return (
            <div>
               RegComp {this.props.name}
            </div>
        );
    }
}

export default RegComp
