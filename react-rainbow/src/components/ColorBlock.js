import React, { useState } from 'react';

function ColorBlock(props) {
    let [toggle, setToggle] = useState(false);
    let [stars, setStar] = useState([]);
    let addStar = (newStar) => {setStar([...stars,newStar])}
    return (
        <div>
            <div className='colorBlock' style={{'backgroundColor': props.color}}>
                <input type='button' onClick={() => {addStar('*'); setToggle(true); setTimeout(()=>{setToggle(false)},1000)}}/>
            </div>
            <p>{props.color}{toggle ? stars: ` ${stars.length} Star${stars.length===1 ? '':'s'}!`}</p> 
        </div>
        
    )
}

export default ColorBlock;