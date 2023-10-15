import React from "react";
import BracketGame from "./BracketGame";

const Column = ({ num, duels_data ,tournamentID}) => {
  const emptyDuel = {
    1: { team_name: "", robot_name: "" },
    2: { team_name: "", robot_name: "" },
    winner: 0,
  };
  // console.log(duels_data);
  return (
    // <div style={{height: `${2400/16*num}px`}} className='flex flex-col justify-around items-center'>
    <div
      style={{ height: `${(1200 / 16) * num}px` }}
      className="flex flex-col justify-around items-center"
    >
      {Array.from({ length: num }, (_, index) =>
        duels_data[index] ? (
          <BracketGame key={index} tournamentID={tournamentID+`-${index+1}`} teams_data={duels_data[index]} /> // Assuming you need a unique key for each rendered component
        ) : (
          <BracketGame key={index} tournamentID={tournamentID+`-${index+1}`} teams_data={emptyDuel} />
        )
      )}
    </div>
  );
};

export default Column;
