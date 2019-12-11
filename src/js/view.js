import temperature from './logic';

const render = (data) => {
  const temp = temperature(data.main.temp);
  document.getElementById('content').setAttribute("class", "light-border");
  document.getElementById('content').innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <h4>${data.weather[0].description}</h4>
    <h3>${temp.metricTemp} °C</h3>
    <h3>${temp.imperialTemp} °F</h3>
  `;
};

export default render;