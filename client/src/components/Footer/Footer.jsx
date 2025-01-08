import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className='copyright' style={{'padding-bottom' : '20px'}}>
            &copy; Copyright 2025. All Rights Reserved
          </div>
          <div className="brand-name anton-regular">THE SIGMA</div>
        </div>
        <div className="right">
          <img src="/img/payment.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
