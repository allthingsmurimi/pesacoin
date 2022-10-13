import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
// import { icons } from 'react-icons'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)

  return (
    <div className='header'>
      <div className='container'>
        <h1>PESA<span className='primary'>coin</span></h1>
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
             <li>
               <a href='/'>Home</a>
          </li>
          <li>
               <a href='/'>Featured</a>
          </li>
          <li>
               <a href='/'>Earned</a>
          </li>
          <li>
               <a href='/'>Contact</a>
          </li>
        </ul>
        <div className='btn-group'>
          <button className='btn'>Connect Wallet</button>
        </div>

        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{color: '#333'}} />) : (<FaBars size={20} style={{color: '#333'}} />)}
       </div>

      </div>

    </div>
  )
}

export default Navbar