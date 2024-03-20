import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { clearScreen, deleteDigit, evaluation } from './features/calculatorSlice'
import DigitButton from './components/DigitButton'
import OperationButton from './components/OperationButton'

function App() {

  const calculator = useSelector(state => state.calculator)
  const dispatch = useDispatch()

  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className="previous-operand">{calculator.previousOperand} {calculator.operation}</div>
        <div className="current-operand">{calculator.currentOperand}</div>
      </div>
      <button className='span-two' onClick={() => dispatch(clearScreen())}>AC</button>
      <button onClick={() => dispatch(deleteDigit())}>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch}/>
      <DigitButton digit="1" dispatch={dispatch}/>
      <DigitButton digit="2" dispatch={dispatch}/>
      <DigitButton digit="3" dispatch={dispatch}/>
      <OperationButton operation="*" dispatch={dispatch}/>
      <DigitButton digit="4" dispatch={dispatch}/>
      <DigitButton digit="5" dispatch={dispatch}/>
      <DigitButton digit="6" dispatch={dispatch}/>
      <OperationButton operation="+" dispatch={dispatch}/>
      <DigitButton digit="7" dispatch={dispatch}/>
      <DigitButton digit="8" dispatch={dispatch}/>
      <DigitButton digit="9" dispatch={dispatch}/>
      <OperationButton operation="-" dispatch={dispatch}/>
      <DigitButton digit="." dispatch={dispatch}/>
      <DigitButton digit="0" dispatch={dispatch}/>
      <button className='span-two' onClick={() => dispatch(evaluation())}>=</button>
    </div>
  )
}

export default App
