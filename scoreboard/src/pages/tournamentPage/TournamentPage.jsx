import * as lodash from "lodash";
import * as React from "react";
import { Space } from "react-zoomable-ui";
import Tournament from "../../components/Tournament";

const colorFor = (i) => {
  switch (i % 4) {
    case 0:
      return "#440023";
    case 1:
      return "#F0A932";
    case 2:
      return "#39AA99";
    case 3:
      return "#839FFF";
  }
};

export const TournamentPage = ({spaceRef}) => {

  return (
    
        <Space
          ref={spaceRef}
          style={{ backgroundColor: "#1d1c18" }}
          // innerDivStyle={{ width: 1000 }}
        >
            <Tournament spaceRef={spaceRef} />
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
