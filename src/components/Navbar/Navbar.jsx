import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [menu, setMenu] = useState("home"); 

  return (
    <div className='navbar'>
       <img src={assets.logo} alt="" className="logo" />
       <ul className="navbar-menu">
        <Link onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <Link onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</Link>
        <Link onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</Link>
        <Link onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</Link>
       </ul>
       <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button>sign in</button>
       </div>     
{/*     //======  =======  ======//     */}
    </div>
  )
}
