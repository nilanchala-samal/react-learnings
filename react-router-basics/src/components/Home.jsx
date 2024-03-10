import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex justify-center flex-col items-center p-3 mx-10 box-border bg-slate-300 mt-3'>
        <h1 className='text-4xl mb-5'>Home Page</h1>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt explicabo ipsam, minus eveniet dolorem repellendus consequatur veniam esse velit quia voluptas ab illo aut accusamus nam aperiam repudiandae fuga magni eius incidunt harum excepturi saepe maxime dignissimos! Velit, dolor fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam ex cumque error quisquam odit doloremque ea, aspernatur omnis recusandae aut temporibus quia consectetur sapiente debitis repellat voluptas, vitae tempora?</p>
      </div>
      <div className='flex justify-center items-center '>
        <button onClick={() => navigate('order-summary')} className='outline-none px-4 py-1 rounded-full text-black bg-lime-400 shadow-lg mx-16 mt-6 hover:bg-lime-500'>Place Order</button>
      </div>
    </>
  )
}

export default Home