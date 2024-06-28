import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 50){
        setSticky(true)
      }else{
        setSticky(false)
      }
    })
  },[])

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt='' className='logo'/>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Program</a>
        </li>
        <li>
          <a href='#'>About Us</a>
        </li>
        <li>
          <a href='#'>Campus</a>
        </li>
        <li>
          <a href='#'>Testimonials</a>
        </li>
        <li>
          <button className='btn'>Contact Us</button><a href='#'></a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
