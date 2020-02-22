import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    SUN,
    THUNDER,
    DRIZZLE,
    RAIN,
    SNOW,
} from './../../../constants/weathers';
import './styles.css';

const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]: "day-thunderstorm",
    [DRIZZLE]: "day-showers",
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x"

    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>
    else
        return <WeatherIcons name={"day-sunny"} size="2x"/>
};

const WeatherTempeture = ({tempeture, weatherState}) => (
    <div className="weatherTempetureCont">
        {getWeatherIcon(weatherState)}
        <span className="tempeture">{`${tempeture}`}</span>
        <span className="tempetureType">{`C°`}</span>
    </div>
);

//VALIDACIONES UTILIZANDO PROPS
WeatherTempeture.propTypes = {
    tempeture: PropTypes.number,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTempeture;