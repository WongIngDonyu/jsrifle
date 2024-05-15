import React from 'react';
import { useSelector } from 'react-redux';

function WeatherHistory () {
    const weatherHistory = useSelector(state => state.weather.weatherHistory);
    return (
        <div>
            <h2>История погоды</h2>
            <ul>
                {weatherHistory.map((weatherData, index) => (
                    <li key={index}>
                        <p>Город: {weatherData.name}</p>
                        <p>Температура: {weatherData.main.temp.toFixed(2)} °C</p>
                        <p>Описание: {weatherData.weather[0].description}</p>
                        <p>Время записи: {weatherData.time}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default WeatherHistory;
