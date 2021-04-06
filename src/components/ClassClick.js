import React, { Component } from 'react'

export class ClassClick extends Component {
    handleClick(){
        console.log(` "this" is needed for classComponent  `)
    }
    
    render() {
        return (
            <div>
                <button onClick= {this.handleClick}>Click</button>
            </div>
        )
    }
}

export default ClassClick
