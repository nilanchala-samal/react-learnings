import React from 'react'
import { chooseOperation } from '../features/calculatorSlice'

function OperationButton({ operation, dispatch }) {
    return (
        <button onClick={() => dispatch(chooseOperation(operation))}>{operation}</button>
    )
}

export default OperationButton