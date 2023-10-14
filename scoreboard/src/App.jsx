import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ZoomTestPage } from "./pages/zoomtestPage/ZoomTestPage";
import { suppressBrowserZooming } from "react-zoomable-ui";
import { useEffect } from "react";
import BracketGame from "./components/BracketGame";

import Tournament from "./components/Tournament";
function App() {
  useEffect(suppressBrowserZooming);

  return (
    <>
      <div>
        <Tournament />
      </div>
    </>
  );
}

export default App;
