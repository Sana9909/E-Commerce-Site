import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import Slider from '../../components/Slider/Slider'

const Home = () => {
  return (
    <div className='home'>
      <Slider />
    </div>
  )
}

export default Home
