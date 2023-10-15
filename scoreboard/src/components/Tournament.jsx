import React from 'react'
import Column from './Column'





const Tournament = ({spaceRef}) => {
    return (
        <>
        <div className="flex flex-row w-screen gap-8 ml-40" id='tournament' style={{border:'2px solid red' ,width:'fit-content'}}>
            <Column num={8} />
            <Column num={8} />
            <Column num={8} />
            <Column num={8} />
        </div>
        <div className="flex flex-row w-screen gap-8 ml-40 mt-20" id='tournament2' style={{border:'2px solid red' ,width:'fit-content'}}>
            <Column num={8} />
            <Column num={8} />
            <Column num={8} />
            <Column num={8} />
        </div>

        </>
    )
}

export default Tournament