export interface WeatherApiModel {
    current: CurrentWeather;
    daily: ForecastItem[]
}

export interface CoordinatesApiModel {
    coord: {
        lon: number;
        lat: number;
    }
}

export interface CurrentWeather {
    temp: number;
    feels_like: number;
    weather: WeatherData[];
}

export interface ForecastItem {
    dt: number;
    temp: {
        day: number;
    };
    feels_like: {
        day: number;
    };
    weather: WeatherData[];
}

interface WeatherData {
    id: number;
    main: string;
    description: string;
    icon: string;
}