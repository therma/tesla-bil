import React, { Component } from "react";
import teslaService from "./tesla-battery.service";
import { initialData } from "../mocks/data";
import {TeslaCar, TeslaStats, TeslaCounter, TeslaClimate, TeslaWheels} from "../component";

export class TeslaBattery extends Component {
  state = initialData;

  onBlurSpeed = () => {
    // TODO: On Speed blur, set the focus to false
  };

  onBlurTemperature = () => {
    // TODO: On Temperature blur, set the focus to false
  };

  onFocusSpeed = () => {
    // TODO: On Speed focus, set the focus to true
  };

  onFocusTemperature = () => {
    // TODO: On Temperature focus, set the focus to true
  };

  incrementSpeed = () => {
    // If the speed's value is less than the max speed then increase the speed's value by the speed.step
    this.setState(state => ({speed: {...state.speed, value: state.speed.value + state.speed.step}}));
  };
  incrementTemperature = () => {
    // TODO: If the temperature's value is less than the max temperature then increase the temperature's value by the temperature.step
    const temp = this.state.temperature;
    temp.value += 10;
    this.setState({temperature: temp});
  };

  decrementSpeed = () => {
    // TODO: If the speed's value is higher than the min speed then decrease the speed's value by the speed.step
    const speed2 = this.state.speed;
    speed2.value -= 5;

    this.setState({speed: speed2});
  };

  decrementTemperature = () => {
    // TODO: If the temperature's value is higher than the min temperature then decrease the temperature's value by the temperature.step
    const temp = this.state.temperature;
    temp.value -= 10;
    this.setState({temperature: temp});
  };

  changeClimate = () => {
    // TODO: Swith the value on(true) and off(false)
    const clim = this.state.climate;
    clim.value = !clim.value;
    this.setState({climate: clim});
  };

  onBlurClimate = () => {
    // TODO: On Climate blur, set the focus to false
  };

  onFocusClimate = () => {
    // TODO: On Climate focus, set the focus to true
  };

  onBlurWheels = () => {
    // TODO: On Wheels blur, set the focus to null
  };

  changeWheelSize = (size) => {
    // On Wheels change size, assign the new value to the wheels' value
    //this.setState({});

    const wheel = this.state.wheels;
    wheel.value = size;
    this.setState({wheels: wheel});
  };

  onFocusWheels = (size) => {
    // TODO: On Wheels focus, assign the size to the focused property of the wheels' object
  };

  componentDidMount = () => {
    // TODO: When the app starts, get the metrics from the services and set the state to the metrics
    this.setState({metrics: teslaService.getModelData()});
  };

  render = () => {
    const {
      title,
      wheels,
      speed,
      models,
      metrics,
      climate,
      temperature,
    } = this.state;
    if (!metrics) {
      return <div>....Fetch Data from the backend</div>;
    }
    const speedCounter = {
      model: this.state.speed,
      incrHandler: this.incrementSpeed,
      decrHandler: this.decrementSpeed,
      onFocusHandler: this.onFocusSpeed,
      onBlurHandler: this.onBlurSpeed,
      title: 'Speed',
      unit: 'mph'
    }
    const tempCounter = {
      model: this.state.temperature,
      incrHandler: this.incrementTemperature,
      decrHandler: this.decrementTemperature,
      onFocusHandler: this.onFocusTemperature,
      onBlurHandler: this.onBlurTemperature,
      title: 'Outside Temperature',
      unit: '°'
    }
    return (
      <form className="tesla-battery">
        <h1>{title}</h1>

        <TeslaCar {...this.state}></TeslaCar>
        <TeslaStats {...this.state}></TeslaStats>

        <div className="tesla-controls cf">
          
          <TeslaCounter {...speedCounter} ></TeslaCounter>

          <div className="tesla-climate cf">
            <TeslaCounter {...tempCounter} ></TeslaCounter>
            <TeslaClimate 
                climate={this.state.climate} 
                temperature={this.state.temperature}
                changeClimateHandler={this.changeClimate}
                onBlurHandler={this.onBlurClimate}
                onFocusHandler={this.onFocusClimate}
            >
            </TeslaClimate>
          </div>

          <TeslaWheels
              wheels={wheels}
              changeHandler={this.changeWheelSize}
              onBlurHandler={this.onBlurWheels}
              onFocusHandler={this.onFocusWheels}
          >
          </TeslaWheels>

        </div>
        <div className="tesla-battery__notice">
          <p>
            The actual amount of range that you experience will vary based on
            your particular use conditions. See how particular use conditions
            may affect your range in our simulation model.
          </p>
          <p>
            Vehicle range may vary depending on the vehicle configuration,
            battery age and condition, driving style and operating,
            environmental and climate conditions.
          </p>
        </div>
      </form>
    );
  };
}
