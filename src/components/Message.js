import React from 'react';


class Message extends React.Component {
    constructor(){
        super()
        this.state ={
        message: 'Welcome to App'
        }
    }

changeMessage(){    
    this.setState({
        message:'Thank you for comming!'
    })
}

    render(){
        return(
        <div>{this.state.message} 
        <button onClick = {()=>this.changeMessage()}>Change it</button>
        </div>
        )
    }
}
export default Message