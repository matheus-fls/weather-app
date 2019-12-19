async function getLocation() {
  try {
    const response = await fetch('https://protected-brushlands-10302.herokuapp.com/ipinfo');
    const location = await response.json();
    document.getElementById('search').placeholder = `${location.city}, ${location.country}`;
  } catch (err) {
    console.error(err);
  }
}

export default getLocation;