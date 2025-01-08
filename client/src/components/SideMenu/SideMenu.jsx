import React from 'react'
import {Link} from 'react-router-dom'
import './SideMenu.scss'

import CloseIcon from '@mui/icons-material/Close';
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
        <div className="sidemenu-header">
          <div className="cross-button" onClick={toggleMenu}><CloseIcon/></div>
        </div>
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
