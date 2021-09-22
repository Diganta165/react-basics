import React from 'react';

const Person = (props) => {
    console.log('Person', props.person);
    const {name, price} = props.person;
    return (
        <div>
            <h3>Name:{name}</h3>
            <h5>Buddget: {price}</h5>
        </div>
    );
};

export default Person;