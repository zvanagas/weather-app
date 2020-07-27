const FAVORITES_KEY = 'favorite-cities';

export const getFavorites = (): string[] => {
    const storage = localStorage.getItem(FAVORITES_KEY);
    if (!storage) {
        return [];
    }

    return JSON.parse(storage);
}

export const addFavorite = (city: string): boolean => {
    const favorites = getFavorites();

    if (favorites.indexOf(city) > -1) {
        return false;
    }

    favorites.push(city);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));

    return true;
}

export const removeFavorite = (city: string) => {
    const favorites = getFavorites();
    const favoriteIndex = favorites.indexOf(city);

    if (favoriteIndex < 0) {
        return false;
    }

    favorites.splice(favoriteIndex, 1);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    return true;
}