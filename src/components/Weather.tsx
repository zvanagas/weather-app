import React from 'react';
import { CurrentWeather } from '../models/weather';
import './Weather.scss';
import { addFavorite } from '../services/favorites.service';

export default ({ city, weather }: WeatherProps) => {
    if (!weather) {
        return (<div>No data!</div>);
    }

    return (
        <div className="Weather-content">
            <span className="City-name">{city}</span>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather"/>
            <div className="Current-temp">{weather.temp.toFixed(0)}°</div>
            <button className="Favorite" onClick={() => addFavorite(city)}>+</button>
        </div>
    );
}

interface WeatherProps {
    city: string;
    weather: CurrentWeather;
}