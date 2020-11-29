import React from "react";
import Pages from "./Pages";
import "./Style/Home.css";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
const Home = () => {
  return (
    <>
      <h1>
        WEATHER FORCAST{" "}
        <WbSunnyOutlinedIcon
          className="main_icon"
          style={{paddingLeft:'10px', marginTop: "10px", fontSize: "20px" }}
        />
      </h1>
      <Pages />
    </>
  );
};

export default Home;
