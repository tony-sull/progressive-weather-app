import { Store } from 'svelte/store';
import { getForecast } from './api';
import { localStorageSync } from './storage';

const storage = localStorageSync();

function formatLocation(city, country) {
    if (city === null && country === null) {
        return '';
    }

    return `${city}, ${country}`;
}

function isThunderstorm(id) {
    return id > 199 && id < 233;
}

function isDrizzle(id) {
    return id > 299 && id < 322;
}

function isRain(id) {
    return id > 499 && id < 532;
}

function isSnow(id) {
    return id > 599 && id < 623;
}

function getWeatherIcon(id) {
    if(isThunderstorm(id)) {
        return 'icons/weather/thunderstorm.svg';
    }

    if(isDrizzle(id) || isRain(id)) {
        return 'icons/weather/rain.svg';
    }

    if(isSnow(id)) {
        return 'icons/weather/snow.svg';
    }

    return 'icons/weather/cloud.svg';
}

const initState = {
    date: new Date(),
    cloudiness: 0,
    windSpeed: 0,
    humidity: 0,
    temperatureValue: 0,
    temperatureHigh: 0,
    temperatureLow: 0,
    temperatureUnit: 'Fahrenheit',
    location: '',
    description: 'Please connect to internet to fetch latest forecast',
    weatherIcon: 'icons/weather/cloud.svg'
}

export class AppStore extends Store {
    constructor() {
        super(Object.assign({}, initState, storage.rehydrate));

        this.compute('year', ['date'], date => {
            return date.getFullYear();
        });

        this.compute('theme', ['date'], date => {
            const hour = date.getHours();
            return (hour > 5 && hour < 18) ? 'app--day': 'app--night'
        });

        this.on('state', storage.onState);
    }
    
    updateForecast(position, fetch) {
        getForecast(position.coords, fetch)
            .then(data => {
                this.set({
                    cloudiness: data.clouds.all,
                    date: new Date(),
                    windSpeed: data.wind.speed,
                    humidity: data.main.humidity,
                    temperatureValue: Math.round(data.main.temp),
                    temperatureHigh: Math.round(data.main.temp_max),
                    temperatureLow: Math.round(data.main.temp_min),
                    location: formatLocation(data.name, data.sys.country),
                    description: data.weather[0].description,
                    weatherIcon: getWeatherIcon(data.weather[0].id)
                });
            });
    }

    toggleTemperatureUnit() {
        const { temperatureUnit } = this.get();

        this.set({
            temperatureUnit: temperatureUnit === 'Celcius' ? 'Fahrenheit' : 'Celcius'
        });
    }
}