import React from 'react';
import { ForecastItem } from '../models/weather';
import './Forecast.scss';

export default ({ forecast }: ForecastProps) => {
    if (!forecast) {
        return (<span>No data!</span>);
    }

    return (
        <div className="Forecast">
            <h3>Forecast</h3>
            <div className="Content">
                {forecast.map(item =>
                <div className="ForecastItem" key={item.dt}>
                    <div className="Text">{getDate(item.dt)}</div>
                    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Weather"/>
                    <div className="Text">{item.temp.day.toFixed(0)}°</div>
                </div>)}
            </div>
        </div>
    );
};

const getDate = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    return `${month}.${day}`;
};

interface ForecastProps {
    forecast: ForecastItem[];
}