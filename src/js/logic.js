const temperature = (temp) => ({
  metricTemp: Math.floor(temp - 273.15),
  imperialTemp: Math.floor(temp * (9/5) - 459.67)
});

export default temperature;