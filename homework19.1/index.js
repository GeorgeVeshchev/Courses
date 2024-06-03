(function() {
    const apiKey = '99352d7be3e4f44f6b086e7d5397481c';
    const city = 'Odesa';
    const weatherDescription = document.getElementById('weather-description');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const refreshButton = document.getElementById('refresh-button');

    function fetchWeather() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Не вдалося завантажити дані про погоду');
                }
                return response.json();
            })
            .then(data => {
                updateWidget(data);
            })
            .catch(error => {
                console.error(error);
                weatherDescription.textContent = 'Помилка завантаження даних';
                temperature.textContent = '--';
                humidity.textContent = '--';
            });
    }

    function updateWidget(data) {
        weatherDescription.textContent = data.weather[0].description;
        temperature.textContent = `${data.main.temp} °C`;
        humidity.textContent = `${data.main.humidity} %`;
    }

    
    fetchWeather();


    refreshButton.addEventListener('click', fetchWeather);
})();
