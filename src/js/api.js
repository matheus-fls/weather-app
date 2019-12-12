import render from './view';

const fetchUnit = (unit, location) => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=a9b08ec198a19ece08c7d0379994415b`, { mode: 'cors' });

async function getWeather() {
  try {
    const location = document.getElementById('search').value;
    const response = document.querySelector('input[name="unit"]:checked').value === 'celsius'
      ? await fetchUnit('metric', location) : await fetchUnit('imperial', location);
    const weatherData = await response.json();
    render(weatherData);
  } catch (err) {
    alert('Invalid input, try again!');
  }
}

export default getWeather;
