import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTempeture from './WeatherTempeture';
import './styles.css';

const WeatherData = ({ data: {tempeture, weatherState, humidity, wind} }) => (

    <div className="weatherDataCont">
        <WeatherTempeture tempeture={tempeture} weatherState={weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
    </div>
);

WeatherData.propTypes = {
    data: PropTypes.shape({
        tempeture: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default WeatherData;