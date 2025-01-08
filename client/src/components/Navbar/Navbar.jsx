import React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import './Navbar.scss'

const Navbar = ({toggleMenu}) => {
    return (
    <div className='navbar-wrapper'>
        <div className='scroller'>
            <ul>
                <li>
                    <span>THE SIGMA</span>
                </li>
                <li>
                    <span>New Stock!</span>
                </li>
                <li>
                    <span>Hurry!</span>
                </li>
            </ul>
            <ul aria-hidden="true">
                <li>
                    <span>THE SIGMA</span>
                </li>
                <li>
                    <span>New Stock!</span>
                </li>
                <li>
                    <span>Hurry!</span>
                </li>
            </ul>
        </div>

        <div className='navbar'>
            <div className="wrapper">
                <div className='left'>
                    <MenuIcon onClick={toggleMenu}/>
                </div>
                <div className='center'>
                    <Link className='link' to="/">THE SIGMA</Link>
                </div>
                <div className='right'>
                    <div className='center'>
                        <Link className='link' to="/">Homepage</Link>
                    </div>
                    <div className='center'>
                        <Link className='link' to="/">About</Link>
                    </div>
                    <div className='center'>
                        <Link className='link' to="/">Contact</Link>
                    </div>
                    <div className='center'>
                        <Link className='link' to="/">Stores</Link>
                    </div>
                    <div className='icons'>
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div className='cartIcon'>
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


// {
//     const sidebar = document.querySelector('.sidebar');
//     const menuIcon = document.querySelector('.menu-icon');
//     console.log(menuIcon.classList);
//     console.log(sidebar.classList);

//     menuIcon.addEventListener('click', () => {
//         console.log('clicked');
//         // sidebar.classList.toggle('active');
//     });
// }




export default Navbar