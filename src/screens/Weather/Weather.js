import React,{useEffect, useState} from "react";
import { getWeather } from "./Redux/reducer";
import {useDispatch, useSelector} from "react-redux";
import { Container } from "react-bootstrap";
//weather component
const DisplayWeather = () => {
    const [weather, setWeather] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getWeather());
    }, [dispatch]);

    const weatherData = useSelector(state => state.WeatherReducer.weather);
    useEffect(() => {
        if (weatherData.weather) {
            setWeather(weatherData.weather);
        }
        console.log("weatherData", weather);
    }, [weatherData]);

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
      }

    return (
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
        <main>
          {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
          ) : ('')}
        </main>
      </div>

    );
}
export default DisplayWeather;