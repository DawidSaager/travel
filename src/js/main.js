const burger = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav__items');
const navItem = document.querySelectorAll('.nav__item');
const weatherTemperature = document.querySelector('.weather__temperature')
const weatherImg = document.querySelector('.weather__img')
const weatherHumidity = document.querySelector('.weather__humidity')

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=poznań'
const API_KEY = '&appid=583e903792d6382b1760288bd0b3c4b5'
const API_UNITS ='&units=metric'

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const openNavMobile = () => {
	nav.classList.toggle('nav__items--active');

	navItem.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__items--active');
		});
	});
};

// WEATHER API

const getWeather = () => {
	const URL = API_LINK + API_KEY + API_UNITS
	axios.get(URL).then(res => {
		console.log(res.data);
		const temp = res.data.main.temp
		const idStatus = res.data.weather[0].id
		const humidity = res.data.main.humidity

		weatherTemperature.textContent= Math.floor(temp) + '℃' ;
		weatherHumidity.textContent = humidity + '%'

		if(idStatus >= 200 && idStatus <= 232){
         weatherImg.setAttribute('src', './dist/img/thunderstorm.png')
      } else if(idStatus >= 300 && idStatus <= 321){
         weatherImg.setAttribute('src', './dist/img/rain.png')
      } else if(idStatus >= 500 && idStatus <= 531){
         weatherImg.setAttribute('src', './dist/img/rain.png')
      } else if(idStatus >= 600 && idStatus <= 622){
         weatherImg.setAttribute('src', './dist/img/snow.png')
         console.log('ok');
      } else if(idStatus === 800){
         weatherImg.setAttribute('src', './dist/img/sun.png')
         console.log('ok');
      } 
		else if(idStatus >= 801 && idStatus <= 804){
         weatherImg.setAttribute('src', './dist/img/clouds.png')
         console.log('ok');
      } 
		else if(idStatus >= 701 && idStatus <= 781){
         weatherImg.setAttribute('src', './dist/img/mist.png')
         console.log('ok');
      } 
	})
}
getWeather()


burger.addEventListener('click', openNavMobile);