import React, { useRef, useEffect, useState } from "react";
import Team from "./Team";

const BracketGame = ({ }) => {
  const teams_data = [
    { team_name: "ENSI", robot_name: "3jeli" },
    { team_name: "ENISO", robot_name: "la9bi7" },
    // { team_name: "ENIM", robot_name: "robotino" },
    // { team_name: "ENICAR", robot_name: "mohsen" },
  ];
//   state: 0->neutre 1-> winner 2-> loser
  const states = Array.from({length:teams_data.length}).map(()=>0)
  const toggleState = (i)=>{return states[i]==0? 1: states[i] ==1? 2:0}
  
  const setState = (index) => {
    states[i] = toggleState(index)
  }

  const divRef = useRef(null);
  const [tailX, setTailX] = useState(0);
  const [headX, setHeadX] = useState(0);
  const [headY, setHeadY] = useState(0);

  const test = () => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setTailX(rect.x + rect.width);
      setHeadY(rect.y - rect.height / 2);
      setHeadX(rect.x + rect.width);
    }
  };

//   console.log("point", headX, headY);

  return (
    <div ref={divRef}>
      {teams_data.map((value, index) => {
        return <Team setState={setState} index={index+1} {...value} />;
      })}
    </div>
  );
};

export default BracketGame;
