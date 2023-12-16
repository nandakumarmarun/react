import React from 'react'
import './Style/menuBar.css'

function MenuBar() {
    return (
        <div className='menuBar'>
            <div className='menu-Items'>
                <div className='menu-item'>
                    <img alt='logo' src='src/assets/icons/user.png'></img><a className='active' href='http://localhost:3000/'>User Management</a>
                </div>
                <div className='menu-item' >
                    <a href='http://localhost:3000/'>Activity Management</a>
                </div>
                <div className='menu-item'>
                    <a href='http://localhost:3000/'>Document Management</a>
                </div>
                <div className='menu-item'>
                    <a href='http://localhost:3000/'>Acccount Management</a>
                </div>
                <div className='menu-item'>
                    <a href='http://localhost:3000/'>Product Management</a>
                </div>





            </div>
        </div>
    )
}

export default MenuBar
