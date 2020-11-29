import React from "react";
import "./Style/Pages.css";

// import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
// import LooksOutlinedIcon from "@material-ui/icons/LooksOutlined";

class Pages extends React.Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      resource: null,
      stateName: null,
      city_name: null,
      current_temp: null,
      max_temp: null,
      min_temp: null,
      humidity: null,
      description: null,
    };
  }

  data = async (state) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${state},in&appid=d08c90d74401f36defa327735e955091`
      );
      const result = await response.json();
      console.log("Result is : ", result);
      if (result.cod == 404) {
        alert(result.message);
      } else {
        this.setState({
          resource: result,
          city_name: result && result.name,
          max_temp: result && result.main && result.main.temp_max,
          min_temp: result && result.main && result.main.temp_min,
          humidity: result && result.main && result.main.humidity,
          description:
            result &&
            result.weather &&
            result.weather instanceof Array &&
            result.weather[0] &&
            result.weather[0].description,
          current_temp: result && result.main && result.main.temp,
        });
      }
    } catch (error) {
      alert("Something Went Wrong...", error);
    }
  };

  clickHandler = () => {
    const { stateName } = this.state;
    this.data(stateName);
  };

  handleState = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // weatherHandler(){
  //     var description = this.state.description;
  //     switch(description){
  //         case 'Haze':
  //             <p><WbSunnyOutlinedIcon /></p>
  //             break;
  //         default:
  //                 <LooksOutlinedIcon />
  //     }

  // }

  render() {
    console.log("render");
    console.log(this.state.resource);
    const state = this.state;
    return (
      <div className="parent_div">
        <input
          type="text"
          name="stateName"
          placeholder="State Name"
          value={this.state.state}
          onChange={this.handleState}
        />
        <button onClick={this.clickHandler}>Submit</button>
        <p className="city_name">
          {" "}
          City : <span> {state.city_name} </span>
        </p>
        <p className="current_temp" onChange={this.weatherHandler}>
          Current Temp : <span> {state.current_temp} </span>
        </p>
        <div className="child_div">
          <p className="child_div_para max_temp">
            Max Temp : <span> {state.max_temp} </span>
          </p>
          <p className="child_div_para min_temp">
            Min Temp : <span> {state.min_temp} </span>
          </p>
        </div>
        <p className="humadity">
          Humidity : <span> {state.humidity} </span>
        </p>
        <p className="description">
          Description : <span> {state.description} </span>
        </p>
        {/* <p onChange={this.weatherHandler}  className="description" ></p> */}
      </div>
    );
  }
}

export default Pages;
