import './style.scss';
import getWeather from './js/api';

document.getElementById('submit').addEventListener('click', getWeather);
