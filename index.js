 const apiKey = 'caee9d897ef2a99ad0f8e76c4d9a3cbf'
 const locButton = document.querySelector('.loc-button');
 const todayInfo = document.querySelector('.today-info');
 const todayWeatherIcon = document.querySelector('.today-weather i');
 const todayTemp = document.querySelector('.weather-temp');
 const daysList = document.querySelector('.days.list');

 
 // Mapping of weather conditions codes to icons class names (Depending on Openweather API Responses)

 const weatherIconMap = {
    '01d': 'sun',
    '01n': 'moon',
    '02d': 'sun',
    '02n': 'moon',
    '03d': 'cloud',
    '03n': 'cloud',
    '04d': 'cloud',
    '04n': 'cloud',
    '09d': 'cloud-rain',
    '09n': 'cloud-rain',
    '10d': 'cloud-rain',
    '10n': 'cloud-rain',
    '11d': 'cloud-lightning',
    '11n': 'cloud-lightning',
    '13d': 'cloud-snow',
    '13n': 'cloud-snow',
    '50d': 'water',
    '50n': 'water'
 };

 function fetchWeatherData(location){
    // Construct the API url with the location and api key 

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`

    // Fetch weather data from api
    fetch(apiUrl).then(Response => Response.json()).then
    (data =>{
        //update todays info
        const todayWeather = data.list[0].weather[0].description
        const todayTempurature = `${Math.round(data.list[0].main.temp)}°C`;
        const todayWeatherIconCode = data.list[0].weather[0].icon;

        todayInfo.querySelector('h2').textContent = new Date().toLocaleDateString('en', {weekday:'long'});
        todayInfo.querySelector('span').textContent = new Date().toLocaleTimeString('en', {day: "numeric", month: 'long', year: 'numeric'});
        todayWeatherIcon.className = `bx bx-$`
        {weatherIconMap[todayWeatherIconCode]};
        todayTemp.textContent = todayTempurature;

        //update location and weather description in the left-info section

        const localtionElement = document.querySelector('today-info > div > span');
        localtionElement.textContent = `${data.city.name}, ${data.city.country}`;

        const weatherDescriptionElement = document.querySelector('.today-weather > h3');
        weatherDescriptionElement.textContent = todayWeather;

        //update todays info in the 'day-info' section
        const todayPrecipitation = `${daya.list[0].pop}%`;
        const todayHumidity = `${data.list[0].main.humidity}%`;
        const todayWindSpeed = `${Math.round(data.list[0].wind.speed)}km/h`;

        const dayInfoContainer = document.querySelector('.day-info');
        dayInfoContainer.innerHTML = `
            <div>
                <span class="title">PRECIPITATION</span>
                <span class="value">${todayPrecipitation}</span>
            </div>
            <div>
                <span class="title">HUMIDITY</span>
                <span class="value">${todayHumidity}</span>
            </div>
            <div>
                <span class="title">WIND SPEED</span>
                <span class="value">${todayWindSpeed}</span>
            </div>
        `;
        // update next 4 days weather
        const today = new Date();
        const nextDaysData = data
    })
 }
