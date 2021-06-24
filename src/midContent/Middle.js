import React from 'react';
import ReactDOM from 'react-dom';
import "./middle.css"
import { useStateValue } from '../StateProvider';

const Middle = ()=>{
    const [{bucket}]=useStateValue();
    return(
        <div className="main">
                <p>Hey Adding Your files wait</p>
            
        </div>
    )
}

export default Middle