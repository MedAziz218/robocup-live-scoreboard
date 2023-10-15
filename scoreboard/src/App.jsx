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
function App() {
  useEffect(suppressBrowserZooming);
  const spaceRef = React.useRef(null);

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
      </nav>
      <div style={{ flexGrow: 1, position: "relative" }}>
        <TournamentPage spaceRef={spaceRef} />
      </div>
    </div>
  );
}

export default App;
