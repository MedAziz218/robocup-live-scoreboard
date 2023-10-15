import React from 'react';
import BracketGame from './BracketGame';


const Column = ({num,}) => {
  return (
    // <div style={{height: `${2400/16*num}px`}} className='flex flex-col justify-around items-center'>
    <div style={{height: `${1200/16*num}px`}} className='flex flex-col justify-around items-center'>
      
    {Array.from({ length: num }, (_, index) => (
        <BracketGame key={index} /> // Assuming you need a unique key for each rendered component
      ))}
      
    </div>
  );
};

export default Column;
