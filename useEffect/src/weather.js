let fetchedWeather;

(async () => {
    fetchedWeather = await fetchData();
    console.log(fetchedWeather); // This will log the fetched data after it's fetched
})();

async function fetchData(){
    let Weather = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
    let weatherData = await Weather.json();
    return weatherData;
}
// console.log(fetchedWeather);
