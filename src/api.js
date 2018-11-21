const appId = process.env.OPEN_WEATHER_APP_ID;
const baseUrl = process.env.OPEN_WEATHER_BASE_URL;

export function getForecast(coordinates, fetch) {
    const url = `${baseUrl}?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${appId}&units=metric`;

    return fetch(url)
        .then(res => res.json());
}