import React from "react";
import "./SideNav.css";
import { useStateValue } from "../StateProvider";
import { Button } from "@material-ui/core";

const SideNav = () => {
  const time = new Date();
  const [{ bucket }, dispatch] = useStateValue();
  const addEvent = () => {
    const c = document.querySelector(".headTime").innerHTML;
    // taking the exact time that is being shown in the browser
    dispatch({
      type: "ADD_THE_ELEMENT",
      item: {
        time: c,
        date: time.toDateString() // while taking date from the system
      }
    });
  };
  return (
    <div className="side-nav">
      <div className="side">
        <Button onClick={addEvent} variant="contained" color="primary">
          Click Me
        </Button>
      </div>
    </div>
  );
};

export default SideNav;
