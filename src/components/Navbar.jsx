import React from 'react'
import img from '../assets/logo2.png'

const Navbar = () => {
  return (
    <div className='grid grid-cols-3 bg-slate-900 text-white'>
        <div>
            <img src={img} alt="logo" className='h-10 w-10git m-5' />
        </div>
        <div className='grid grid-cols-5 p-5'>
          <div>Features</div>
          <div>Pricing</div>
          <div>Help</div>
          <div>Blog</div>
          <div>About us</div>
        </div>
        <div className='flex flex-row-reverse gap-6 p-5 text-black'>
          <div><button className='bg-white h-10 w-20 rounded-2xl font-bold shadow-2xl cursor-pointer hover:bg-slate-400'>Login</button></div>
          <div><button className='bg-white h-10 w-20 rounded-2xl font-bold shadow-2xl cursor-pointer hover:bg-slate-400'>Signup</button></div>
        </div>
    </div>
  )
}

export default Navbar