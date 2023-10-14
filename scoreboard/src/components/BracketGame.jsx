import React, { useRef, useEffect, useState } from 'react';
import Team from './Team';

const BracketGame = () => {
    const name = "firas";
    const divRef = useRef(null);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);


    useEffect(() => {
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            setX(rect.x + rect.width)
            setY(rect.y - rect.height/2)
        }
    }, []);

    console.log("point", x, y);

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
