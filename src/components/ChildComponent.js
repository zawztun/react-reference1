import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick= {props.greetHandler}>Hello</button> */}
            <button onClick= {()=>props.greetHandler('Child')}>Hello</button>
        </div>
    );
}

export default ChildComponent
