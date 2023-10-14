import React from 'react'
import Column from './Column'

const Tournament = () => {
    return (
        <div className="flex flex-row w-screen gap-8 ml-40">
            <Column num={16} />
            <Column num={4} />
            <Column num={1} />
        </div>

    )
}

export default Tournament