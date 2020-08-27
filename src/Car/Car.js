import React from 'react'
import Radium from 'radium'
import './Car.css'

const car = (props) => {

    const inputClasses = ['input']

    if (props.name !== '') {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    if (props.name.length > 4) {
        inputClasses.push('bold')
    }

    const style = {
        border: '1px solid #ccc',
        boxShadow : '0 4px 5px 0 rgba(0,0,0,.14)' ,
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 15px 0 rgba(0,0,0, .25)',
            cursor: 'pointer'
        }
    }

    return (
    <div style={style
        // border: '1px solid gray',
        // margin: '10px auto',
        // display: 'block',
        // padding: '10px',
        // boxShadow: '0 4px 5px 0 rgba(0,0,0, .14)',
        // borderRadius: '5px'
    }
        className="Car"
    >
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input 
            type="text" 
            onChange={props.onChangeName} 
            value={props.name} 
            className={inputClasses.join(' ')}
        />
        {/* <button onClick={props.onChangeTitle}>Click</button> */}
        <button onClick={props.onDelete}>Delete</button>
    </div>
)
}

export default Radium(car)