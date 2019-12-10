import './style.scss';
import "regenerator-runtime/runtime";

const log = () => document.getElementById('search').value;

document.getElementById('submit').addEventListener('click', getWeather);

async function getWeather() {
  try {
    const location = log();
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a9b08ec198a19ece08c7d0379994415b`, {mode: 'cors'});
    const weatherData = await response.json();
    render(weatherData);
  } catch (err) {
    console.log(err);
  }
}; 

async function getImg(status) {
  try {
    const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=${status}+sky&api_key=mM0ENgiKUlPnwBfA2gKnvsl9UsURPTbN&limit=1`, {mode: 'cors'});
    const coolGif = await response.json();
    console.log(coolGif.data[0].images.original.url);
    // return coolGif.data[0].images.original.url;  
    document.getElementById('giphy').src = coolGif.data[0].images.original.url;
  } catch (err) {
    console.log(err);
  }
}; 

const temperature = (temp) => ({
  metricTemp: Math.floor(temp - 273.15),
  imperialTemp: Math.floor(temp * (9/5) - 459.67)
});

const render = (data) => {
  const temp = temperature(data.main.temp);
  const giphy = getImg(data.weather[0].description);
  document.getElementById('content').innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <h4>${data.weather[0].description}</h4>
    <p>${temp.metricTemp} °C</p>
    <p>${temp.imperialTemp} °F</p>
    <img id="giphy">
  `;
};
