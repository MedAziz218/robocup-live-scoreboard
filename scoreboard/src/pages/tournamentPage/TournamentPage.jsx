import * as lodash from "lodash";
import * as React from "react";
import { Space } from "react-zoomable-ui";
import Tournament from "../../components/Tournament";


const TEXT_OF_ROBOTS = `PANTHER,ESPRIT
Unfollower,vide
ZINA,enicar
Maptrix,INSAT
Smart Shark,Iset'Com Tunis
Dante,Esprit
Weld El Haj,ENIT
Runner,Fst
Sankou7,enicar
Fi SUREEEE,enicar
Omouri,ULT
Ti base,enicar
Magayver,ENIM
Robotino,ENIM
7nach rebe7,Enstab
luffy,INSAT
Chacotome,vide
Fighter,vide
Battouta,vide
Dragon,Enit
THE THUNDER,Enetcom
El 3OU9,Ult
Dembele,vide
Mario,INSAT
Zonixxx,Enim
M5 CS,vide
El Monji,INSAT
M8,vide
Dragon2,Enit
Oméga,vide
BumbleBee,ISTIC
Sigma,ENIM`;

const parser = (TEXT_OF_ROBOTS) => {
  let result = TEXT_OF_ROBOTS.split("\n");
  result = result.map((line) => {
    let x = line.split(",");
    // console.log(x[1].trim());
    return [x[0].trim(), x[1].trim()];
  });

  return result;
};

const create_duels = (LIST_OF_ROBOT) => {
  let list = [];
  for (let i = 0; i < LIST_OF_ROBOT.length; i++) {
    if (i % 2 == 0) {
      let p1 = LIST_OF_ROBOT[i];
      let p2 = LIST_OF_ROBOT[i + 1];
      p1 = { team_name: p1[1], robot_name: p1[0] };
      p2 = { team_name: p2[1], robot_name: p2[0] };

      let match = { 1: p1, 2: p2, winner: 0, index:Math.floor(i/2)+1 };
      list.push(match);
    }
  }
  return list
};


const getListOfDuels = (TEXT_OF_ROBOTS)=>{
    const LIST_OF_ROBOT = parser(TEXT_OF_ROBOTS);
    const LIST_OF_DUELS = create_duels(LIST_OF_ROBOT);
    // console.log(LIST_OF_DUELS)
    return LIST_OF_DUELS;

}

const tournament1_list = getListOfDuels(TEXT_OF_ROBOTS)

export const TournamentPage = ({spaceRef}) => {

  return (
    
        <Space
          ref={spaceRef}
          // style={{ backgroundColor: "#1d1c18" }}
          // innerDivStyle={{ width: 1000 }}
        >
            <Tournament spaceRef={spaceRef} listOfDuels={tournament1_list} tournamentID='tournament1' />
            {/* <Tournament spaceRef={spaceRef} listOfDuels={tournament1_list} tournamentID='tournament2' /> */}

            {/* <Tournament spaceRef={spaceRef} /> */}

          {/* <div key={`row`} style={{ display: "flex", flexDirection: "row" }}> */}
          {/* </div> */}
        </Space>
      
  );
};

// <button
//   style={{ backgroundColor: "red" }}
//   onClick={() => {
//     const element = document.getElementById("tournament");
//     if (element) {
//       spaceRef.current?.viewPort?.camera.centerFitElementIntoView(
//         element,
//         {
//           // Zoom in to the element but stop at 100 pixels (as in,
//           // client pixels, ala what the browser thinks is a pixel in
//           // most cases) around it
//           elementExtraMarginForZoomInClientSpace: 100,
//         },
//         {
//           durationMilliseconds: 1000,
//         }
//       );
//     }
//   }}
// >
//   Click to zoom into the mountain
// </button>
