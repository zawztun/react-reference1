import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isSignIn: true // false
        }
    }
    
 render() {
      
    return this.state.isSignIn && <div>Welcome ZZT</div>




    //  return(
    //      this.state.isSignIn ? 
    //      <div>Welcome ZZT</div>
    //      : <div>Welcome Guess</div>
    //  )

        /////
//         let message
//         if(this.state.isSignIn){
//             message= <div>Welcome ZZT</div>
//         } 
//         else {
//             message = <div>Welcome Guess</div>
//         }
//         return <div>{message}</div>

            ////////
    //     if(this.state.isSignIn){
    //         return <div>Welcome ZZT</div>
    //     }else{
    //         return <div>Welcome Guess</div>
    //     }
        
        // return (
        //     <div>
        //         <div>Welcome ZZT</div>
        //         <div>Welcome Guess</div>
        //     </div>
        // )
    }
}

export default UserGreeting
