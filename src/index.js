import './style.scss';
import 'regenerator-runtime/runtime';
import getWeather from './js/api';

document.getElementById('submit').addEventListener('click', getWeather);
