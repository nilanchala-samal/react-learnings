import React from 'react'
import { addDigits } from '../features/calculatorSlice'

function DigitButton({ digit, dispatch }) {
    return (
        <button onClick={() => dispatch(addDigits(digit))}>{digit}</button>
    )
}

export default DigitButton