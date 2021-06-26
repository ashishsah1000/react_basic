import React from 'react';
import ReactDOM from 'react-dom';
import "./middle.css"
import { useStateValue } from '../StateProvider';

const Middle = ()=>{
    const [{bucket}]=useStateValue();
    const element = bucket.map((x)=>{
        console.log("Mapping was called"+x.time)
        return(
            <div><h1>You clicked at {x.time}.</h1></div>
        )
    })
    return(
        <div className="main">
            <p>{bucket.length ==0? " No Logs! Please Use + to add logs" : ""}</p>
                
                <p>{bucket.map(item =>(<div className="mlogs"><span>You clicked at {item.time}</span></div>))}</p>
            
        </div>
    )
}

export default Middle