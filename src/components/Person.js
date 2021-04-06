import React from 'react'

function Person({person}) {
    return (
        <div >
            <h3 > I am {person.name}.
                  I am {person.age}years old.
                  I am {person.skill} programmer.
            </h3>
        </div>
    )
}
export default Person
// Person and NameList components ar link
//key props is reserved //