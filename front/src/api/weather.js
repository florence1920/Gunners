import axios from 'axios';

function getWeather(){
    return axios.get('https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=1ab36fe03fbeccecfe87ce98308f6a10')
}

export {getWeather}

