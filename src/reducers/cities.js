import {SET_FORECAST_DATA} from './../actions';

export const cities = (state={}, action)=> {
    switch (action.type) {
        case SET_FORECAST_DATA:
            const {city, foreastData} = action.payload;
            return {...state, [city]: {foreastData}};
            
        default:
            return state;
    }
}

export const getForecastDataFromCities = (state, city) => state[city] && state[city].foreastData;