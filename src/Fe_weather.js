import React from "react";
import "./App.css";
import { FiSun } from "react-icons/fi";
import App from "./App";



function Fe_weather(props) {

    return <div className="box">
        <div className="feture-p">
            <h3 className="day">{props.day}</h3>
            <FiSun className="icon-s" />
            <h5 className="temp">{props.temp}</h5>
        </div>
    </div>

}

export default Fe_weather;