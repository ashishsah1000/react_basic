import React from "react";
import "./SideNav.css";
import { useStateValue } from "../StateProvider";
import { Button } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
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
  const clearAll = () => {
    dispatch({
      type: "REMOVE_ELEMENT"
    });
  };
  return (
    <div className="side-nav">
      <div className="side">
        <Button onClick={addEvent} variant="contained" color="primary">
          <AddIcon />
        </Button>
        <br></br>
        <br></br>
        <Button onClick={clearAll} variant="contained" color="secondary"> 
        <DeleteIcon />
        </Button>
      </div>
    </div>
  );
};

export default SideNav;
