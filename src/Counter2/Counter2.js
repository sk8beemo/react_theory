import React from 'react'
import {ClickedContext} from '../App'

export default props => {
    return (
        <div style={{
            border:"1px solid #ccc",
            margin:"0 auto",
            width:"200px"
        }}>
            <h3>Counter 2</h3>
            <ClickedContext.Consumer>
                {clicked => clicked ? <p>Clicked</p> : null}
            </ClickedContext.Consumer>
        </div>
    )
}