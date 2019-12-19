const render = (data) => {
  document.getElementById('content').innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <div>
      <img id="icon" 
        src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"
        alt="${data.weather[0].description} icon"  
      >
      <h4>${data.weather[0].description}<h4>
    </div>
    <h3 id="temp">${data.main.temp}</h3>
  `;
  document.getElementById('temp').innerHTML += document.querySelector('input[name="unit"]:checked').value === 'celsius' ? ' °C' : ' °F';
  document.getElementById('content').setAttribute('class', 'light-border');
};

export default render;