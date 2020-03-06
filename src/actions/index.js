import transformForecast from './../services/transformForecast';
import transformWeather from '../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER = 'SET_WEATHER';

const setCity = payload => ({type: SET_CITY, payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});


const api_key = "81b9faea3ab90eb33b220759772e2beb";
const url = "https://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {

    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        //activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));
        
        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                //modificar el estado con el resultado de la promise(fetch)
                dispatch(setForecastData({city: payload, forecastData}));
            }
        );
    };
};

export const setWeather = payload => {

    /*
    const api_key = "81b9faea3ab90eb33b220759772e2beb";
    const url = "https://api.openweathermap.org/data/2.5/weather";
    componentWillMount(){
        const {city} = this.state;
        const api_weather = `${url}?q=${payload}&appid=${api_key}`;
        fetch(api_weather).then( data => {
            return data.json();
        }).then(weather_data => {
            const data = transformWeather(weather_data);
            this.SVGElementInstanceList({data});
        });
    }
    */
};