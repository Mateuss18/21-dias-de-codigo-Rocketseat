let weather = {
    apiKey: '2242bbc85149bfc537941bacbf1e6ca3',
    fetchWeather: function () {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?lat=-22.783186&lon=-47.294059&appid=2242bbc85149bfc537941bacbf1e6ca3&units=metric&lang=pt_br'
        )
            .then(response => response.json())
            .then(data => this.displayWeather(data))
    },
    displayWeather: function (data) {
        const { name } = data
        const { icon, description } = data.weather[0]
        const { temp, humidity } = data.main
        const { speed } = data.wind

        document.querySelector(".city").innerText = name
        document.querySelector(".description").innerText = description.charAt(0).toUpperCase() + description.slice(1);
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
        document.querySelector(".temperature").innerText = temp.toFixed() +"°C"
        document.querySelector(".humidity").innerText = "Umidade: " + humidity + "%"
        document.querySelector(".wind").innerText = "Vento: " + speed.toFixed() + " km/h"
    }
}

weather.fetchWeather()
