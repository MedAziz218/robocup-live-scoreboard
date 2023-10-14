import React from 'react'

const Team = ({name}) => {
    return (
        <div className='bg-AREyellow text-black w-64 border-2 border-gray-800 flex justify-between'>
            <p className='flex justify-center items-center bg-AREbeige w-8'>1</p>
            <p className='w-60 flex justify-center items-center'>{name}</p>
        </div>
    )
}

export default Team