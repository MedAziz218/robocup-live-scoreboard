import React from 'react'

const Team = ({name}) => {
    return (
        <div className='bg-blue-300 text-black w-64 border-2 border-gray-800'>
            {name}
        </div>
    )
}

export default Team