import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ZoomTestPage } from "./pages/zoomtestPage/ZoomTestPage";
import { suppressBrowserZooming } from "react-zoomable-ui";
import { useEffect } from "react";
import BracketGame from "./components/BracketGame";
import { TournamentPage } from "./pages/tournamentPage/TournamentPage";
function App() {
  useEffect(suppressBrowserZooming);

  return (
    <>
      <div>
        <TournamentPage />
      </div>
    </>
  );
}

export default App;
