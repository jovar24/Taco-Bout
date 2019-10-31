import React from "react";
import "../../style/home.scss"
import logo from "../../images/logo.png"

const Home = () => {
  return (
    <div className="home-background">
      <div className="home-content">

        <div className="top">
          <h1>welcome</h1>
          <img src={logo} />
        </div >

        <div className="middle">
          <h1>Tacos!!</h1>
        </div>
      </div>
    </div >
  )
};

export default Home;
