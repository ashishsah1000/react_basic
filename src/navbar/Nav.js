import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import "./nav.css";
import { Button } from "@material-ui/core";
import  CalendarToday  from "@material-ui/icons/CalendarTodayOutlined";
import Clock from "@material-ui/icons/Timer";

const Nav = () => {
  const [time, getTime] = useState("");
  const Time = new Date()
  const TimeX = Time.toDateString()
  useEffect(() => {
    const interval = setInterval(() => {
      const Time2 = new Date();
      getTime(Time2.toTimeString().split(" ")[0]);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="navMain">
        <div className="nav">
      <div className="logo">
        <Link to="/">
          <img  
            src={logo}
            alt=""
          />
        </Link>
      </div>

      <div className="time">
        <div>
          <span> <h2>Current time is :</h2><h2  className="headTime">{time!=""?time:" Intializing"}</h2></span>
        <span><CalendarToday  className="iconCal"/>  {time!=""?TimeX:"Your session is being intialized"}</span>
        </div>
        
      </div>
    </div>
    </div>
    
  );
};

export default Nav;
