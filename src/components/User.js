import React from 'react';

export default  function User(props){
    return (
        <span className="user">
            <span className='name'>{props.name} {props.handle}</span>
           
        </span>
    )
}