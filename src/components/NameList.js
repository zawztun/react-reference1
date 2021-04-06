import React from 'react'
import Person from './Person'

function NameList() {

   const names = ['Baruce' , 'supermen' , 'Batman', 'Baruce']

     const persons = [
        {
            id:1,
            name:'Baruce',
            age: 34,
            skill: 'Php'
        },
        {
            id:2,
            name:'Arre',
            age: 34,
            skill: 'Python'
        },
        {
            id:3,
            name:'ZawGree',
            age: 24,
            skill: 'Angular'
        },
        {
            id:4,
            name:'roley',
            age: 20,
            skill: 'React'
        }
    ]

    
    // const personList = persons.map(person => <Person key = {person.name} person = {person}/>)
    // return <div> {personList} </div>
   
    const nameList = (names.map((name,index) => <h2 key = {index}>{index} {name}</h2>))
    return <div>{nameList}</div>
}

export default NameList
