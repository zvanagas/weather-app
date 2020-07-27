import { getCoordinates } from './coordinates.service';
import { WeatherApiModel } from './../models/weather';
import { API_KEY } from './../config';

export const getForecast = async(city: string) => {
    const { lat, lon } = await getCoordinates(city);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&exclude=hourly&units=metric`);

    if (!res.ok) {
        throw Error(res.status === 404 ? 'Weather was not found!' : 'Something went wrong!');
    }

    return res.json().then(r => r as WeatherApiModel);
}