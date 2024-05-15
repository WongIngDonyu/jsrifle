import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {addWeatherToHistory, setWeatherDataCurrent} from '../store/weatherSlice';
import ErrorComponent from './ErrorComponent';
function CityInput ({setCity})  {
    const [cityInput, setCityInput] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const fetchWeatherData = async () => {
        const API_KEY = '3f7544d8c6cd46f2aef4a412c3bccb5b';
        const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}&lang=ru`;
        try {
            const response = await axios.get(API_URL);
            const data = response.data;
            data.main.temp = data.main.temp - 273.15;
            data.time = new Date().toLocaleString();
            dispatch(setWeatherDataCurrent(data));
            dispatch(addWeatherToHistory(data));
            setCity(cityInput);
            setError(null);
        } catch (error) {
            setError('Ошибка при получении погодных данных.');
            console.error('Ошибка при получении погодных данных:', error);
        }
    };

    return (
        <div>
            <input
                type="text" value={cityInput} onChange={(e) => setCityInput(e.target.value)}
                placeholder="Введите название города"
            />
            <button onClick={fetchWeatherData}>Получить погоду</button>
            {error ? <ErrorComponent error={error} /> : null}
        </div>
    );
}
export default CityInput;

