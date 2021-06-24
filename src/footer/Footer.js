import React from 'react';
import ReactDOM from 'react-dom';
import "./footer.css"
import { useStateValue } from '../StateProvider';

const Footer = ()=>{
    const [{bucket}]=useStateValue();
    return(
        <div className="footer">
            <h1>footer</h1>
            
        </div>
    )
}

export default Footer