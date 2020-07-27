import React, { useState, FormEvent, useEffect } from 'react';
import './Form.scss';
import { getCity } from '../services/coordinates.service';

export default (props: FormProps) => {
    const [city, setCity] = useState('');

    useEffect(() => setCity(props.city), [props.city]);

    const isValid = () => !!city && !!city.match(/^[A-Za-z]+$/);
    const isGeolocationAvailable = () => 'geolocation' in navigator;
    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(async(res) => {
            const cityName = await getCity(res.coords.latitude, res.coords.longitude)
            setCity(cityName);
            props.onSubmit(cityName);
        })
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        props.onSubmit(city);
    }

    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <input className="Input" placeholder="City" value={city} onChange={e => setCity(e.target.value)}/>
                <input className="Button" type="submit" value="Search" disabled={!isValid()}/>
            </form>
            {isGeolocationAvailable() ? <button className="Button" onClick={() => getLocation()}>My location</button> : null}
        </div>
    );
}

interface FormProps {
    city: string;
    onSubmit: (city: string) => void;
}
