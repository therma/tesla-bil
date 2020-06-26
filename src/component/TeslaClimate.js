import React from "react";

export const TeslaClimate = ({climate, temperature, changeClimateHandler, onBlurHandler, onFocusHandler}) => 
    <div>
        <label
        className={`tesla-climate__item ${
            !(temperature.value > 10) ? "tesla-heat " : " "
        }${climate.value ? "tesla-climate__item--active " : " "}${
            climate.focused === climate.value
            ? "tesla-climate__item--focused"
            : ""
        }`}
        >
        <p className="heat">
            {temperature.value > 10 ? "ac" : "heat"}{" "}
            {climate.value ? "on" : "off"}
        </p>
        <i className="tesla-climate__icon" />
        <input
            type="checkbox"
            name="climate"
            defaultChecked={climate.value}
            onClick={changeClimateHandler}
            blur={() => onBlurHandler}
            focus={() => onFocusHandler}
        />
        </label>
    </div>