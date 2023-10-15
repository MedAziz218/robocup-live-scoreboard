import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ZoomTestPage } from "./pages/zoomtestPage/ZoomTestPage";
import { suppressBrowserZooming } from "react-zoomable-ui";
import { useEffect } from "react";
import BracketGame from "./components/BracketGame";
import { TournamentPage } from "./pages/tournamentPage/TournamentPage";
import * as React from "react";
import FocusButton from "./components/FocusButton";
function clamp(min,max,val){
  return val<min? min: val>max? max: val
}
function App() {
  useEffect(suppressBrowserZooming);
  const spaceRef = React.useRef(null);
  const focusElement = (element_id) => {
    const element = document.getElementById(element_id);
    if (element) {
      spaceRef.current?.viewPort?.camera.centerFitElementIntoView(
        element,
        {
          // Zoom in to the element but stop at 100 pixels (as in,
          // client pixels, ala what the browser thinks is a pixel in
          // most cases) around it
          elementExtraMarginForZoomInClientSpace: 50,
        },
        {
          durationMilliseconds: 1000,
        }
      );
    }
  }
  const  [Col,setCol] = useState(1)
  const  [Row,setRow] = useState(1)
  useEffect(()=>{
    // focusElement(`tournament1-${Col}-${Row}`)

  },[Col,Row])
  const onChangeCol = (event) => {
    setCol(clamp(1,4,event.target.value));
    
  };
  const onChangeRow = (event) => {
    setRow(clamp(1,8,event.target.value));

  };
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* <HashRouter> */}
      <nav
        style={{
          backgroundColor: "#0bf9",
          padding: "5px 10px",
        }}
      >
        <FocusButton spaceRef={spaceRef} element_id={"tournament1"}>
          A1
        </FocusButton>
        <FocusButton spaceRef={spaceRef} element_id={"tournament2"}>
          A2
        </FocusButton>
        <FocusButton spaceRef={spaceRef} element_id={`tournament1-${Col}-${Row}`} onFap={false}>
          {'<>'}
        </FocusButton>
        <input type="number" style={{maxWidth:'30px',marginLeft:'4px'}} value={Row} onChange={onChangeRow} />
        <input type="number" style={{maxWidth:'30px',marginLeft:'4px'}} value={Col} onChange={onChangeCol}/>

       
      </nav>
      <div style={{ flexGrow: 1, position: "relative" }}>
        <TournamentPage spaceRef={spaceRef} />
      </div>
    </div>
  );
}

export default App;
