import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ZoomTestPage } from './pages/zoomtestPage/ZoomTestPage'
import { suppressBrowserZooming } from 'react-zoomable-ui';
import { useEffect } from 'react';
import BracketGame from "./components/BracketGame"

function App() {
  useEffect(suppressBrowserZooming);

  return (
    <>
    <div >

      {/* <ZoomTestPage/> */}
      <BracketGame/>  
    </div>
        
    </>
  )
}

export default App
