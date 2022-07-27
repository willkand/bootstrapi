// Random Dog Generator

let dogButton = document.querySelector('#dog-button');
let dogImage = document.querySelector('#dog-image');

dogButton.addEventListener('click', function (){
    
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (res) {
        return res.json ()
    })
    .then(function (data){
        dogImage.src = data.message
    })
})

//Weather App

let weatherButton = document.querySelector('#weather-button')
let city = document.querySelector('#city-choice')
let desc = document.querySelector('#description')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')

weatherButton.addEventListener('click', function (){
    let cityChoice = city.value

    let cityChoose = (`https://goweather.herokuapp.com/weather/${cityChoice}`)

    fetch(cityChoose)
        .then (function (res) {
            return res.json ()
        })
        .then (function (data) {
            description.innerHTML = `Current Weather: ${data.description}`;
            temp.innerHTML = `Current Temperature: ${data.temperature}`;
            wind.innerHTML = `Current Wind: ${data.wind}`;
        })
})
