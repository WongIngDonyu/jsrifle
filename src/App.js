import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import CityInput from './components/CityInput';
import WeatherDataFetcher from './components/WeatherDataFetcher';
import WeatherHistory from './components/WeatherHistory';
import WeatherDisplay from "./components/WeatherDisplay";

function App ()  {
    const [city, setCity] = useState('');

    return (
        <Provider store={store}>
            <div>
                <CityInput setCity={setCity} />
                <WeatherDataFetcher city={city} />
                <WeatherDisplay />
                <WeatherHistory />
            </div>
        </Provider>
    );
}

export default App;

