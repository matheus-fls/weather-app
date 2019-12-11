import render from './view';

async function getWeather() {
  try {
    const location = document.getElementById('search').value;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ location }&appid=a9b08ec198a19ece08c7d0379994415b`, {mode: 'cors'});
    const weatherData = await response.json();
    render(weatherData);
  } catch (err) {
    alert('Invalid input, try again!');
  }
}

export default getWeather;
