import { CoordinatesApiModel } from './../models/coordinates';
import { API_KEY } from '../config';
export const getCoordinates = async(city: string) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

    if (!res.ok) {
        throw Error(res.status === 404 ? 'Location was not found!' : 'Something went wrong!');
    }

    return res.json().then((r: CoordinatesApiModel) => r.coord);
}

export const getCity = async(lat: number, lon: number) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);

    if (!res.ok) {
        throw Error(res.status === 404 ? 'Location was not found!' : 'Something went wrong!');
    }

    return res.json().then(r => r.name as string);
}
