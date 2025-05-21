import React from 'react'
import homeimg from '../assets/homeimg.png'

const Home = () => {
  return (
    <div className='grid grid-cols-2 bg-slate-900 h-screen'>
        <div className='m-40 text-white'>
            <p className='font-mono '>START SAVING MONEY</p>
            <h2 className='font-bold text-5xl my-5 font-sans'>Smart Credit Card <br />For Your Daily Life</h2>
            <button className='bg-amber-50 w-30 h-10 rounded-2xl text-black my-5 font-sans hover:bg-blue-900 shadow-2xl'>Download</button>
        </div>
        <div className='m-20 drop-shadow-[0_0_50px_rgba(255,255,255,0.5)] rounded-xl'>
            <img src={homeimg} alt="" />
        </div>
    </div>
  )
}

export default Home