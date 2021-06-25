import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { Button } from "@material-ui/core";

const Nav = () => {
  const [time, getTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const Time2 = new Date();
      getTime(Time2.toTimeString().split(" ")[0]);
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img
            src="https://www.pikpng.com/pngl/m/140-1400749_clock-icon-png-alarm-clock-logo-png-clipart.png"
            alt=""
          />
        </Link>
      </div>

      <div className="time">
        <h2 className="headTime">{time}</h2>
      </div>
    </div>
  );
};

export default Nav;
