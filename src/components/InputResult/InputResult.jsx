import React from 'react';
import sunny_IMG from '../../assets/sunny.jpeg';
import snowy_IMG from '../../assets/snowy.jpeg';
import cloudy_IMG from '../../assets/cloudy.jpeg';
import WeatherCards from '../WeatherCards/WeatherCards';

const InputResult = () => {
  return (
    <section
      className='main'
      style={{ backgroundImage: `url(${sunny_IMG})` }}>
      <div className='overlay'>
        <div className='container'>
          <div className='section inputs'>
            <input
              type='text'
              name='city'
              placeholder='Enter city...'
            />
            <button>°F</button>
          </div>

          <div className='section results'>
            <div className='results__description'>
              <h3>London, GB</h3>
              <img
                src='https://openweathermap.org/img/wn/02d@2x.png'
                alt='cloud icon'
              />
              <h3>Cloudy</h3>
            </div>
            <div className='results__temperature'>
              <h1>34 °C</h1>
            </div>
          </div>

          {/* bottom description */}
          <WeatherCards />
        </div>
      </div>
    </section>
  );
};

export default InputResult;
