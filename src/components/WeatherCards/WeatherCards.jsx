import React from 'react'
import { FaArrowDown } from 'react-icons/fa';
import './WeatherCards.css'
const Descriptions = () => {
  return (
    <section className='section cards'>
      <div className="cards__container">
        <div className="cards__icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
      <div className="cards__container">
        <div className="cards__icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
      <div className="cards__container">
        <div className="cards__icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
      <div className="cards__container">
        <div className="cards__icon">
          <FaArrowDown />
          <small>min</small>
        </div>
        <h2>32 °C</h2>
      </div>
    </section>
  )
}

export default Descriptions