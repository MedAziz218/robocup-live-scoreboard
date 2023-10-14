import React, { useRef, useEffect, useState } from 'react';
import Team from './Team';

const BracketGame = ({yes=1}) => {
    const name = "firas";
    const divRef = useRef(null);
    const [tailX, setTailX] = useState(0);
    const [headX, setHeadX] = useState(0);
    const [headY, setHeadY] = useState(0);

    const test = ()=>{
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            setTailX(rect.x + rect.width)
            setHeadY(rect.y - rect.height/2)
            setHeadX(rect.x + rect.width)
        }
    };


    console.log("point", headX, headY);

    return (
        <div ref={divRef}>
            
            <Team name={name} />
            <Team name={name} />
            <Team name={name} />
            <Team name={name} />
        </div>
    )
}

export default BracketGame;
