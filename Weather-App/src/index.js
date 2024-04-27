// eslint-disable-next-line import/extensions
import getForcast from "./fetchAsyncAwait";
import displayWeatherReport from "./displayWeatherReport";
import "./style.css";

// Weather api example: https://api.weatherapi.com/v1/current.json?key=${key}&q=london

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const city = document.querySelector("input").value;
    const forcastData = await getForcast(city);
    displayWeatherReport(forcastData, city);
});
