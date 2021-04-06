import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          username:' ',
          comments:' ',
          topics: 'react'     
        }
    }

    handleUserNameChange = event=>{
        this.setState ({
            username:event.target.value
        })
    }

    handleCommentChange = event =>{
        this.setState({
            comments:event.target.value
        })
    }

    handleTopicChange = event =>{
        this.setState({
            topics:event.target.value
        })
    }
    onFormSubmit = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`)
    }

    render(){
        const {username,comments,topics} = this.state
        return(
            <form onSubmit = {this.onFormSubmit}>
                <label>UserName: </label>
                <input type = "text" value = {username} onChange= {this.handleUserNameChange}/>
            
            <div>
                <label>Comments: </label>
                <textarea value = {comments} onChange = {this.handleCommentChange}/>
            </div>

            <div>
                <label>Topics: </label>
                <select value = {topics} onChange = {this.handleTopicChange}>
                    <option value = "react">React</option>
                    <option value = "angular">Angular</option>
                    <option value = "vue">VUE</option>
                </select>
            </div>
            <button type = "submit">Submit</button>
            {/* <button onClick = {this.onFormSubmit}>Submit</button> */}
            </form>
        )
    }

}

export default Form
