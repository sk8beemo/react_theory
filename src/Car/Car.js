import React from 'react';

export default (props) => (
    <div style={{
        border: '1px solid gray',
        margin: '10px auto',
        width: '200px'
    }}>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name} />
        {/* <button onClick={props.onChangeTitle}>Click</button> */}
        <button onClick={props.onDelete}>Delete</button>
    </div>
)