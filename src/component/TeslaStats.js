import React from "react";

const TeslaStats = ({models, wheels, speed, climate, temperature, metrics}) => 
    <div className="tesla-stats">
        <ul>
        {models
            .map((model) => {
            const miles =
                metrics[model][wheels.value][climate.value ? "on" : "off"]
                .speed[speed.value][temperature.value];
            return {
                model,
                miles,
            };
            })
            .map((stat) => (
            <li key={stat.model}>
                <div
                className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}
                />
                <p>
                {stat.miles}
                <span>MI</span>
                </p>
            </li>
            ))}
        </ul>
    </div>

export default TeslaStats;