import React, { lazy } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img
       className='logo'
       src={assets.logo} 
       alt=""
       loading="lazy"
       />
      <img
       className='profile'
       src={assets.profile_image} 
       alt=""
       loading="lazy" 
       />
    </div>
  )
}

export default Navbar
