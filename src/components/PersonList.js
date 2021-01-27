import React from 'react';


export default props => {
    return (
        <div>
            {props.people.map((person, index)=> {
                return (
                <p key={index}>
                    {person.firstName}, {person.lastName}
                </p>)
            })}
        </div>
    )
}