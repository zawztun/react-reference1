import React from 'react'
import './stylesheet.css'

const StyleSheet=(props)=> {
    let className = props.primary ? 'primary' : ''
    return <div className = {`${className} font-xl`}> Welcome to Zapp </div>
}
export default StyleSheet
