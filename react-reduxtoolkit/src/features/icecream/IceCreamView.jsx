import React from 'react'
import { useSelector } from 'react-redux'

const IceCreamView = () => {
  const numOfIceCreams = useSelector((store) => store.iceCream.nubmerOfIceCreams)
  return (
    <div>
      <h2>Number of Icecream: {numOfIceCreams}</h2>
      <button onClick={handlOrderIcecream}>Order Icecream</button>
      <button onClick={handleRestockIcecreams}>Resotck Icecream</button>
    </div>
  )
}

export default IceCreamView
