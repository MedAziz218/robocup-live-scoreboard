import React from 'react'
import Team from './Team';

const BracketGame = () => {
    const name = "firas";
    return (
        <div>
            <Team name={name} />
            <Team name={name} />
            <Team name={name} />
            <Team name={name} />
        </div>

    )
}

export default BracketGame