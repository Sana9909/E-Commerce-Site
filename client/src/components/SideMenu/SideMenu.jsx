import React from 'react'
import {Link} from 'react-router-dom'
import './SideMenu.scss'
import MenuIcon from '@mui/icons-material/Menu';

const SideMenu = ({toggleMenu,showSideMenu}) => {
  return (
    <div>
      {
        showSideMenu &&(
          <div className='overlay' onClick={toggleMenu}></div>
        )
      }
      <div className={`menu-items ${showSideMenu ? 'open' : 'closed'}`}>
        <button className="cross-button" onClick={toggleMenu}>X</button>
        <ul className='list'>
            <li className='listItem'>
                <Link className='linkName' to="/products/1">Women</Link>
            </li>
            <li className='listItem'>
                <Link className='linkName' to="/products/1">Men</Link>
            </li>
            <li className='listItem'>
                <Link className='linkName' to="/products/1">Kids</Link>
            </li>
            <li className='listItem'>
                <Link className='linkName' to="/products/1">Dashboard</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default SideMenu
