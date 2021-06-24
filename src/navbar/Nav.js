import React from 'react';
import {Link} from "react-router-dom"
import "./nav.css"
import { useStateValue } from '../StateProvider';

const Nav = ()=>{
    const [{bucket}]=useStateValue();
    const time = new Date();
    console.log(time);
    return(
        <div className="nav">
            <div className="logo">
                <Link to="/">
                    <img src="https://www.pikpng.com/pngl/m/140-1400749_clock-icon-png-alarm-clock-logo-png-clipart.png" alt="" />
                </Link>
            </div>
            <div className="time">
               <h2>{time.toTimeString()}</h2>
            </div>
            
        </div>
    )
}

export default Nav