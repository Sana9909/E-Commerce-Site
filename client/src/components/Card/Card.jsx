import React from 'react'

import './Card.scss'

import {Link} from 'react-router-dom'

const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`} className='link'>
      <div className='card'>
        <div className="image">
          <img src={item.img} alt="" className='mainImg'/>
          <img src={item.img2} alt="" className='secondImg'/>
        </div>
        <h3>{item.title}</h3>
        <div className="prices">
          <h4 className='oldPrice'>{item.oldPrice} $</h4>
          <h4 className='price'>{item.price} $</h4>
        </div>
        {item.isNew && <span>New Season</span>}
      </div>
    </Link>
  )
}

export default Card
