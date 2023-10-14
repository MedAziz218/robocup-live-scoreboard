import React from 'react'
import Column from './Column'

const Tournament = () => {
    return (
        <div className="flex flex-row w-screen justify-around">
            <Column num={32} />
            <Column num={8} />
            <Column num={2} />
            <Column num={1} />
        </div>

    )
}

export default Tournament