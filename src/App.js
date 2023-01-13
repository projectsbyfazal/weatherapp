import React, {useState, useEffect} from 'react';
import './App.css';
import Weather from './Weather';

function App() {

  const [weatherInfo, setWeatherInfo] = useState('');
  const [cityName, setCityName] = useState("vadodara");
  const [isWeather, setIsWeather] = useState(true);

  const getWeatherInfo = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=944f290487fce13be45a2a0666b6df40`).then(
      response => {
        return response.json();
      }
    ).then(
      data => {
        if(data.cod === "404" || cityName === ""){
          setIsWeather(false);
        }
        else{
          const {temp, pressure, humidity} = data.main;
          const {name} = data;
          const {country, sunrise, sunset} = data.sys;
          const {speed} = data.wind;
          const {main : weathermood} = data.weather[0];
  
          const weatherData = {
            temp: temp,
            pressure: pressure,
            humidity: humidity,
            city: name,
            country: country,
            sunrise: sunrise,
            sunset: sunset,
            wind: speed,
            weathermood: weathermood
          }
  
          setWeatherInfo(weatherData);
          setIsWeather(true);
        }
      }
    )
  }

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <div className="container">
      <h1>Weather App</h1>
      <div className="search-box">
        <input type="search" placeholder="Enter City Name" value={cityName} onChange={e => setCityName(e.target.value)} className="field" />
        <button className="btn" onClick={ () => getWeatherInfo() }>Search</button>
      </div>

      {
        isWeather ? <Weather {...weatherInfo}/> : <h2 style={{paddingTop: '25px' }}>City Not Found!</h2>
      }

      

    </div>
  );
}

export default App;
