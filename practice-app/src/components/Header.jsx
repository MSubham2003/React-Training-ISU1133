import React from 'react'
import "../style/Header.css";

function Header() {
  return (
    <nav >
        <ul>
            <li><a href='/' onClick={(e)=>{e.preventDefault()}}>Home</a></li>
            <li><a href='/about' onClick={(e)=>{e.preventDefault()}}>About</a></li>
            <li><a href='/contact' onClick={(e)=>{e.preventDefault()}}>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Header