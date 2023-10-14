import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ZoomTestPage } from './pages/zoomtestPage/ZoomTestPage'
import { suppressBrowserZooming } from 'react-zoomable-ui';
import { useEffect } from 'react';
function App() {
  useEffect(suppressBrowserZooming);

  return (
    <>
    <div >

      <ZoomTestPage/>
    </div>
        
    </>
  )
}

export default App
