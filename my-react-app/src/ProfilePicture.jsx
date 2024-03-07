import React from 'react'

export default function ProfilePicture() {

    const handleClick = (e) => {
        e.target.style.display = 'none';
    }

    const imgUrl = './src/assets/madarasharingan-sharingan.gif'
  return (
    <img src={imgUrl} alt='Profile Picture' onClick={(e) => handleClick(e)}></img>
  )
}
