import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weatherData: null,
        weatherHistory: [],
    },
    reducers: {
        setWeatherDataCurrent: (state, action) => {
            state.weatherData = action.payload;
        },
        addWeatherToHistory: (state, action) => {
            state.weatherHistory.push(action.payload);
        },
    },
});
export const {setWeatherDataCurrent,addWeatherToHistory} = weatherSlice.actions;
export default weatherSlice.reducer;

