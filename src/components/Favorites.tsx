import React from 'react';
import { getFavorites, removeFavorite } from '../services/favorites.service';
import './Favorites.scss';

const FavoriteItem = ({ city, onItemClicked, key }: FavoriteItemProps) => (
    <div key={key}>
        <button className="Button" onClick={() => onItemClicked(city)}>{city}</button>
        <button className="Button" onClick={() => removeFavorite(city)}>-</button>
    </div>
);

export default ({ onItemClicked }: FavoritesProps) => {
    const favorites = getFavorites();

    return (
        <div className="Favorites">
            <span className="Title">Favorites</span>
            {favorites.map((item, index) => <FavoriteItem city={item} onItemClicked={onItemClicked} key={index}></FavoriteItem>)}
        </div>
    );
}

interface FavoritesProps {
    onItemClicked: (city: string) => void;
}

interface FavoriteItemProps {
    city: string;
    onItemClicked: (city: string) => void;
    key: number;
}