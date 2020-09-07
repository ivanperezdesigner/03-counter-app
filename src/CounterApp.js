import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 0 }) => {

    const [ counter, setCounter ] = useState( value )

    // Handle Add cuando el botón es presionado
    const handleAdd = (e) => {
        setCounter (counter + 1)
        // setCounter((c) => c + 1 )
    }
    
    const handleSubs = (e) => {
        setCounter (counter - 1)
    }
    
    const handleReset = (e) => {
        setCounter( value )
    }

    return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter }</h2>
        <button onClick = { handleAdd }>+1</button>
        <button onClick = { handleReset }>Reset</button>
        <button onClick = { handleSubs }>-1</button>
    </>
    )}

CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp