import React, { useState } from 'react';
import './index.css';
import axios from 'axios';
import InputResult from './components/InputResult/InputResult';
const url = `https://api.openweathermap.org/data/2.5/weather?q=newyork&appid=${
  import.meta.env.VITE_OPENWEATHERMAP_API_KEY
}`;

function App() {
  return (
    <>
      <InputResult />
    </>
  );
}

export default App;
