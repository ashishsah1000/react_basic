import React from 'react';
import ReactDOM from 'react-dom';
import "./SideNav.css"
import { useStateValue } from '../StateProvider';

const SideNav = ()=>{
    const [{bucket}]=useStateValue();
    return(
        <div className="side-nav">
           <div className="side">
               <h1>hey</h1>
               <div className="s-button">
               </div>
               
           </div>
            
            
        </div>
    )
}

export default SideNav