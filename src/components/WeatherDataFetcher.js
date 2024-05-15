import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { interval } from 'rxjs';
import { setWeatherDataCurrent } from '../store/weatherSlice';
import ErrorComponent from './ErrorComponent';
function WeatherDataFetcher ({city})  {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    useEffect(() => {
        const subscription = interval(60000).subscribe(async () => {
            if (city) {
                const API_KEY = '3f7544d8c6cd46f2aef4a412c3bccb5b';
                const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru`;
                try {
                    const response = await axios.get(API_URL);
                    const data = response.data;
                    data.main.temp = data.main.temp - 273.15;
                    dispatch(setWeatherDataCurrent(data));
                    setError(null); // Clear error on successful fetch
                } catch (error) {
                    setError('Ошибка при получении погодных данных.');
                    console.error('Ошибка при получении погодных данных:', error);
                }
            }
        });
        return () => {
            subscription.unsubscribe();
        };
    }, [city, dispatch]);
    return (
        <div>
            {error ? <ErrorComponent error={error} /> : null}
        </div>
    );
}

export default WeatherDataFetcher;
