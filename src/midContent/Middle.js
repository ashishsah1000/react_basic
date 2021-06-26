import React from 'react';
import ReactDOM from 'react-dom';
import "./middle.css"
import { useStateValue } from '../StateProvider';
import { ContactSupportOutlined } from '@material-ui/icons';

const Middle = ()=>{
    const [{bucket}]=useStateValue();
    const scrollDown = ()=>{
        const main = document.querySelector(".main");
             main.scrollTop= main.scrollHeight
    }
    if(bucket.length){
        scrollDown();
    }
    const element = bucket.map((x)=>{
        console.log("Mapping was called"+x.time)
        
        return(
            <div><h1>You clicked at {x.time}.</h1></div>
            
        )
    })
    return(
        <div className="main">
            <div className="mlogs hide"></div>
            
                <p>{bucket.map(item =>((<div><div className="mlogs"><span>You clicked at {item.time} </span></div></div>)))}</p>
                <p className="noData"><strong>{bucket.length ==0? " No Logs! Please Use + to add logs" : ""}</strong></p>
                <p className="blink"> | </p>
        </div>
    )
}

export default Middle