import React from 'react'
import madara from './assets/madarasharingan-sharingan.gif'

export default function Card(props) {
  return (
    <div className='card'>
        <img id='madaragif' src={madara} alt="Madara" />
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-text'>{props.text}</p>
    </div>
  )
}

