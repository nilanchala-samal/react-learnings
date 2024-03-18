import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

const IceCreamView = () => {
  const numOfIceCreams = useSelector((store) => store.iceCream.nubmerOfIceCreams)
  const dispatch = useDispatch()

  const handleOrderIcecream = () => {
    return dispatch(ordered())
  }
  const handleRestockIcecreams = () => {
    return dispatch(restocked(10))
  }
  return (
    <div>
      <h2>Number of Icecream: {numOfIceCreams}</h2>
      <button onClick={handleOrderIcecream}>Order Icecream</button>
      <button onClick={handleRestockIcecreams}>Resotck Icecream</button>
    </div>
  )
}

export default IceCreamView
