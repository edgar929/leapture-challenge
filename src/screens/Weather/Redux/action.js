
import axios from 'axios';


export const getWeatherData = () => {
  return axios.request({
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?q={London}&appid=0c8c52a86b803fbb8401c38befab869d`,
    })
}
