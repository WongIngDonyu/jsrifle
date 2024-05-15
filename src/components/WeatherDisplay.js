import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function WeatherCurrentDisplay () {
    const weatherData = useSelector(state => state.weather.weatherData);
    const [temperature, setTemperature] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(null);
    useEffect(() => {
        if (weatherData) {
            setTemperature(weatherData.main.temp);
            setLastUpdated(new Date());
        }
    }, [weatherData]);
    return (
        <div>
            {weatherData ? (
                <div>
                    <h3>{weatherData.name}</h3>
                    <p>Температура: {temperature ? temperature.toFixed(2) : ''} °C</p>
                    <p>Описание: {weatherData.weather[0].description}</p>
                    <p>Последнее обновление: {lastUpdated ? lastUpdated.toLocaleTimeString() : ''}</p>
                </div>
            ) : (
                <p>Введите название города для получения данных о погоде.</p>
            )}
        </div>
    );
}

export default WeatherCurrentDisplay;
