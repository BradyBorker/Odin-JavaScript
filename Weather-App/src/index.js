import { apiKey } from "./api-key";

// Weather api example: https://api.weatherapi.com/v1/current.json?key=${key}&q=london


async function getForcast(location) {
    const query = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}`
    const fetchForcast = await fetch(query, { mode: 'cors' });
    const forcastData = await fetchForcast.json();
    return forcastData;
}

const location = 'seattle';
const forcastData = await getForcast(location)
console.log(forcastData);