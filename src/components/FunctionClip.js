import React from 'react'

function FunctionClip() {
    function handleClick(){
        console.log('no callback function')
    }
    return (
        <div>
            <button onClick = {handleClick}>Click Me</button>
        </div>
    )
}

export default FunctionClip
