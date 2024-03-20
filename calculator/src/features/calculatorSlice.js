import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    previousOperand: '',
    currentOperand: '',
    operation: ''
}
const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addDigits: (state, action) => {
            if (state.overwrite) {
                return {
                    ...state,
                    currentOperand: action.payload,
                    overwrite: false
                }
            }
            if (action.payload === "0" && state.currentOperand === "0") {
                return state
            }
            if (action.payload === "." && state.currentOperand.includes('.')) {
                return state
            }
            state.currentOperand = `${state.currentOperand || ""}${action.payload}`
        },
        clearScreen: (state) => {
            state.previousOperand = ""
            state.currentOperand = ""
            state.operation = ""
        },
        chooseOperation: (state, action) => {
            if (state.currentOperand == '' && state.previousOperand == '') {
                return state
            }
            let currOp = state.currentOperand
            if(currOp.charAt(currOp.length-1) === '.'){
                return state
            }

            if (state.previousOperand == "") {
                state.operation = action.payload,
                    state.previousOperand = state.currentOperand,
                    state.currentOperand = ""
            }
            else if (state.currentOperand == "") {
                state.operation = action.payload
            } else {
                state.previousOperand = evaluate(state)
                state.operation = action.payload
                state.currentOperand = ""
            }
        },
        deleteDigit: (state) => {
            if (state.overwrite) {
                state.currentOperand = ""
                state.overwrite = false
            } else if (state.currentOperand == "") {
                return state
            } else {
                state.currentOperand = state.currentOperand.slice(0, -1)
            }

        },
        evaluation: (state) => {
            if (state.previousOperand == "" || state.currentOperand == "" || state.operation == "") {
                return state
            } else {
                state.overwrite = true
                state.currentOperand = evaluate(state)
                state.previousOperand = ""
                state.operation = ""
            }
        }
    }
})

function evaluate({ currentOperand, previousOperand, operation }) {
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)

    if (isNaN(prev) || isNaN(current)) return ""
    let computation = ""
    switch (operation) {
        case "+":
            computation = prev + current;
            break
        case "-":
            computation = prev - current;
            break
        case "*":
            computation = prev * current;
            break
        case "÷":
            computation = prev / current;
            break
    }
    return computation.toString()
}

export default calculatorSlice.reducer
export const {
    addDigits,
    clearScreen,
    evaluation,
    chooseOperation,
    deleteDigit
} = calculatorSlice.actions