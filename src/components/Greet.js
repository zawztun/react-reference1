import React from 'react'

//Functional Compoment props
function Greet(props) {
   // const {name, city } = props
    return (
        <div>
            <h2>{props.name} {props.city}</h2>
        </div>
    )
}
export default Greet


// class Component
// import React, { Component } from 'react';

// class Greet extends Component {
//     render() {
//         return (
//             <div>
//                 welcome to {this.props.city} {this.props.name}
//             </div>
//         )
//     }
// }

//  export default Greet
