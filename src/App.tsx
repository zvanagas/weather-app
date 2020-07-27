import React, { useState } from 'react';
import './App.scss';
import Weather from './components/Weather';
import Form from './components/Form';
import Forecast from './components/Forecast';
import Error from './components/Error';
import Favorites from './components/Favorites';
import { CurrentWeather, ForecastItem } from './models/weather';
import { getForecast } from './services/weather.service';

export default () => {
    const [currentCity, setCurrentCity] = useState('');
    const [currentWeather, setCurrentWeather] = useState<CurrentWeather>();
    const [forecast, setForecast] = useState<ForecastItem[]>();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const getWeather = async(city: string) => {
        setLoading(true);
        setError('');
        setCurrentCity(city);
        setCurrentWeather(undefined);
        setForecast(undefined)

        try {
            const weather = await getForecast(city);
            setCurrentWeather(weather.current)
            setForecast(weather.daily);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    }

    const onCityChange = (city: string) => {
        setCurrentCity(city);
        getWeather(city);
    };

    return (
        <div className="App">
            <h1>Weather App</h1>
            <Form city={currentCity} onSubmit={getWeather}></Form>
            {loading ? <span>Loading...</span> : null}
            {!loading && !error && currentWeather ? <Weather city={currentCity} weather={currentWeather}></Weather> : null}
            {!loading && !error && forecast ? <Forecast forecast={forecast}></Forecast> : null}
            {!loading && error ? <Error error={error}></Error> : null}
            <div className="Favorites-wrapper">
                <Favorites onItemClicked={onCityChange}></Favorites>
            </div>
        </div> 
    );
}
