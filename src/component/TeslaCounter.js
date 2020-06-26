import React from "react";

export const TeslaCounter = ({model, title, unit, incrHandler, decrHandler, onFocusHandler, onBlurHandler}) => 
    <div className="tesla-counter">
        <p className="tesla-counter__title">{title}</p>
        <div className="tesla-counter__container cf">
            <div
                className="tesla-counter__item"
                tabIndex="0"
                blur={onBlurHandler}
                focus={onFocusHandler}
            >
                <p className="tesla-counter__number">
                {model.value}
                <span>{unit}</span>
                </p>
                <div className="tesla-counter__controls" tabIndex="-1">
                <button
                    tabIndex="-1"
                    type="button"
                    onClick={incrHandler}
                    disabled={model.value === model.max}
                />
                <button
                    tabIndex="-1"
                    type="button"
                    onClick={decrHandler}
                    disabled={model.value === model.min}
                />
                </div>
            </div>
        </div>
    </div>