import React from 'react'
import './Style/Header.css'

function Header() {
  return (
    <div className='Header'>
        <div className='navBar'>
            <label id='logo-text'>SalesNrich</label>
            <div className='navbar-items'>
                <a id='nav-item' className='active' href='http://localhost:3000/'>Home</a>
                <a id='nav-item' href='http://localhost:3000/'>Companies</a>
                <a id='nav-item' href='http://localhost:3000/'>Contact</a>
                <a id='nav-item' href='http://localhost:3000/'>About</a>
            </div>
        </div>
      
    </div>
  )
}

export default Header
