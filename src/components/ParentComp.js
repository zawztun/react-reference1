import React, { Component } from 'react';
// import RegComp from './RegComp';
// import PureComp from './PureComp';
import MemoComp from './MemoComp';

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'ZZT'
        }
    }
    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name:'ZZT'
            })
        },2000)
    }
    
    
    render() {
        console.log("Parent component **** render")
        return (
            <div>
                <MemoComp name = {this.state.name}/>
                {/* <RegComp name = {this.state.name}/>
               <PureComp name = {this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp
