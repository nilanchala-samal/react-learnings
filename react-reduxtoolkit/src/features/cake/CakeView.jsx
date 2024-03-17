import React from 'react'
import { useSelector } from 'react-redux'

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numberOfCakes)
  return (
    <div>
      <h2>Number of Cakes: {numOfCakes}</h2>
      <button>Order Cake</button>
      <button>Restock Cakes</button>
    </div>
  )
}

export default CakeView
