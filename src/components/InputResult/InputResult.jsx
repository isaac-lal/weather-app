import React, { useState, useEffect } from 'react';
import sunny_IMG from '../../assets/sunny.jpeg';
import snowy_IMG from '../../assets/snowy.jpeg';
import cloudy_IMG from '../../assets/cloudy.jpeg';
import WeatherCards from '../WeatherCards/WeatherCards';
import { getFormattedWeatherData } from '../../weatherService';

const InputResult = () => {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');
  const [city, setCity] = useState('New York');
  const [bg, setBg] = useState(sunny_IMG);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);

      // dynamic background
      const threshold = units === 'metric' ? 20 : 60;

      if (data.temp <= threshold) setBg(snowy_IMG);
      else setBg(sunny_IMG);
    };

    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = e => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === 'C';
    button.innerText = isCelsius ? '°F' : '°C';
    setUnits(isCelsius ? 'metric' : 'imperial');
    console.log(button.innerText);
  };

  const handleChange = e => {
    setCity(e.currentTarget.value);
  };

  return (
    <section
      className='main'
      style={{ backgroundImage: `url(${bg})` }}>
      <div className='overlay'>
        {weather && (
          <div className='container'>
            <div className='section inputs'>
              <input
                onChange={handleChange}
                type='text'
                name='city'
                placeholder='Enter city...'
              />
              <button onClick={e => handleUnitsClick(e)}>°F</button>
            </div>

            <div className='section results'>
              <div className='results__description'>
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img
                  src={weather.iconURL}
                  alt='weatherIcon'
                />
                <h3>{weather.description}</h3>
              </div>
              <div className='results__temperature'>
                <h1>{`${weather.temp.toFixed()} °${
                  units === 'metric' ? 'C' : 'F'
                }`}</h1>
              </div>
            </div>

            {/* bottom description */}
            <WeatherCards
              weather={weather}
              units={units}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default InputResult;
