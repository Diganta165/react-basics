import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';

const Persons = () => {
    // fetching data
    const [persons, setPersons] = useState([]);

    useEffect(()=>{
        
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setPersons(data))
    },[]);
    console.log(persons)
    return (
        <div>
            <h1>Persons Data Here</h1>
            {
                persons.map(person => <Person person={person} key={person.id}></Person>)
            }
            
        </div>
    );
};

export default Persons;