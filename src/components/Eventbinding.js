import React, { Component } from 'react'

export class Eventbinding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message:"Hello"    
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:'Good Bye'
    //     })
    //     console.log(this)
    // }
    
    clickHandler=()=>{
        this.setState({
            message:'good bye'
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
               {/* <button onClick = {this.clickHandler.bind(this)}>OnBind</button>  */}
               {/* <button onClick = {()=>this.clickHandler()}>Click</button>  */}
               {/* <button onClick = {this.clickHandler}>Click</button> */}
               {/* <button onClick = {this.clickHandler}>ClickMe</button> */}

            </div>
        )
    }
}

export default Eventbinding
