import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h2>Let's start the quiz</h2>
      <button className="start-btn">
        <Link to={"/question"}>Start game</Link>
      </button>
    </div>
  );
};

export default Home;
