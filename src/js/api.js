import render from './view';

const endpoint = 'https://protected-brushlands-10302.herokuapp.com/weather';
const fetchUnit = (unit, location) => fetch(`${endpoint}?q=${location}&units=${unit}`);

async function getWeather() {
  try {
    const location = document.getElementById('search').value || document.getElementById('search').placeholder;
    const response = document.querySelector('input[name="unit"]:checked').value === 'celsius'
      ? await fetchUnit('metric', location) : await fetchUnit('imperial', location);
    const weatherData = await response.json();
    render(weatherData);
  } catch (err) {
    alert('Location not found!');
  }
}

export default getWeather;
