import './style.scss';
import getWeather from './js/api';
import getLocation from './js/ipinfo';


getLocation();
document.getElementById('submit').addEventListener('click', getWeather);
