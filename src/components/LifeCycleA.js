import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

// Order of execution => 4 methods

 class LifeCycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'ZZT'
         }
         console.log("LifeCycleA constructor")
     }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleA getDerivedStateFromProps")
            return null
    }    

    componentDidMount() {
        console.log("LifeCycleA componentDidMount")
    }

    // involved => 3 methods
    shouldComponentUpdate(nextProps, nextState) {
        console.log("LifeCycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate")
    }
    
    
    changeState=()=>{
        this.setState({
            name:"CodeVolution"
        })
    }

    render() {
        console.log("LifeCycleA render")
        return ( 
            <div>    
                LifeCycleA
                <button onClick = {this.changeState}>ChangeState</button>
                <LifeCycleB/>   
            </div>
        )
    }
}

export default LifeCycleA
