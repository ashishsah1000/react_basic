import React from "react";
import ReactDOM from "react-dom";
import "./footer.css";
import { useStateValue } from "../StateProvider";
import Clock from "@material-ui/icons/Timer";

const Footer = () => {
  const [{ bucket }] = useStateValue();
  return (
    <div className="footer">
      < Clock />
      <h4>  You have clicked {bucket.length} times</h4>
    </div>
  );
};

export default Footer;
