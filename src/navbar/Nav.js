import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import "./nav.css";
import { Button } from "@material-ui/core";
import  CalendarToday  from "@material-ui/icons/CalendarTodayOutlined";

const Nav = () => {
  const [time, getTime] = useState("");
  const Time = new Date()
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
          <h2 className="headTime">{time}</h2>
        <span><CalendarToday  className="iconCal"/>  {Time.toDateString()}</span>
        </div>
        
      </div>
    </div>
    </div>
    
  );
};

export default Nav;
