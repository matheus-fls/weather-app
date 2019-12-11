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
    alert("Invalid input, try again!");
  }
}; 

const temperature = (temp) => ({
  metricTemp: Math.floor(temp - 273.15),
  imperialTemp: Math.floor(temp * (9/5) - 459.67)
});

const render = (data) => {
  const temp = temperature(data.main.temp);
  document.getElementById('content').setAttribute("class", "light-border");
  document.getElementById('content').innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <h4>${data.weather[0].description}</h4>
    <p>${temp.metricTemp} °C</p>
    <p>${temp.imperialTemp} °F</p>
  `;
};
