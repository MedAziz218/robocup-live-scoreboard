import React from "react";
import Column from "./Column";

const Tournament = ({ spaceRef, tournamentID, listOfDuels }) => {
  let length = listOfDuels.length 
  // numberOfColumns = numberOfColumns + listOfDuels.length % 8 == 0 ? 0 : 1
  let x = []
    x.slice()
  return (
    <div
      className="flex flex-row w-screen gap-8 ml-40"
      id={tournamentID}
      style={{ border: "1px solid #E1d1bd",borderRadius:'10px', width: "fit-content",margin:'100px',padding:'25px' }}
    >
      {/* {Array.from({ length: numberOfColumns }).map(() => (
        <Column num={8} tournamentID={tournamentID} />
      ))} */}
      {<Column num={8} tournamentID={tournamentID+'-1'} duels_data={listOfDuels.slice(0,8)} />}
      {<Column num={8} tournamentID={tournamentID+'-2'} duels_data={listOfDuels.slice(8,16)} />}
      {length>16&&<Column num={8} tournamentID={tournamentID+'-3'} duels_data={listOfDuels.slice(16,24)} />}
      {length>24&&<Column num={8} tournamentID={tournamentID+'-4'} duels_data={listOfDuels.slice(24,32)} />}


      {/* <Column num={8} tournamentID={tournamentID} duels_data={listOfDuels.slice(8,16)} /> */}
      {/* <Column num={8} tournamentID={tournamentID} duels_data={listOfDuels.slice(16,24)} /> */}
      {/* <Column num={8} tournamentID={tournamentID} duels_data={listOfDuels.slice(24,32)} /> */}

    </div>
  );
};

export default Tournament;
