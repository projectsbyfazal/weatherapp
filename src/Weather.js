import React from 'react'
import "./Weather.css";

const Weather = ({temp,pressure,humidity,city,country,sunrise,sunset,wind,weathermood}) => {

    const newsunrise = ` ${new Date(sunrise*1000).getHours()} : ${new Date(sunrise*1000).getMinutes()} `; 
    const newsunset = ` ${new Date(sunset*1000).getHours()} : ${new Date(sunset*1000).getMinutes()} `;
    let wicon;
    switch(weathermood){
        case 'Clear': wicon = "bi bi-cloud-sun";
            break;
        case 'Clouds': wicon = "bi bi-clouds";
            break;
        case 'Haze': wicon = "bi bi-cloud-haze";
            break;
        case 'Mist': wicon = "bi bi-cloud-haze2";
            break;
        case 'Rain': wicon = "bi bi-cloud-hail";
            break;
        case 'Fog': wicon = "bi bi-cloud-fog";
            break;
        case 'Snow': wicon = "bi bi-cloud-snow";
            break;
        case 'Smoke': wicon = "bi bi-cloud-haze2";
            break;
        case 'Sunny': wicon = "bi bi-sun";
            break;
        default: wicon = "bi bi-cloud-sun";
    }

  return (
    <div className="temp-box">

      <div className='weather-info'>
        <div>
            <i className={`${wicon} icon`} ></i>
            <p>{weathermood}</p>
        </div>
        <div>
            <h1 className="temperature">{Math.round(temp)}°C</h1>
            <p>{city}, {country}</p>
        </div>
      </div>
      

      <div className="sun">
        <h4>Sunrise | {newsunrise} AM</h4>
        <h4>Sunset  | {newsunset} PM</h4>
      </div>

      <div className="other-temp">
        <div className="other-details">
            <i className="bi bi-thermometer-sun icon"></i>
            <h3>{humidity}%</h3>
            <p>Humidity</p>
        </div>
        <div className="other-details">
            <i className="bi bi-wind icon"></i>
            <h3>{wind}km/h</h3>
            <p>Wind</p>
        </div>
        <div className="other-details">
            <i className="bi bi-stopwatch-fill icon"></i>
            <h3>{pressure}</h3>
            <p>Air Pressure</p>
        </div>
      </div>
    </div>
  )
}

export default Weather;
