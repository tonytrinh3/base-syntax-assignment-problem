import React from 'react';

const UserOutput = (props) => {
    return(
        <div>
            <p>UserName: {props.name}</p>
            <p>Password: {props.password}</p>
            <input type = "text" onChange = {props.changed}/>
        </div>
    )
}

export default UserOutput