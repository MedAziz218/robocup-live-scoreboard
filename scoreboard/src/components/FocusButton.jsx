import React from "react";

export default function FocusButton({spaceRef,element_id,children}) {
  return (
    <button
      style={{ backgroundColor: "magenta",marginLeft:'4px' }}
      onClick={() => {
        const element = document.getElementById(element_id);
        if (element) {
          spaceRef.current?.viewPort?.camera.centerFitElementIntoView(
            element,
            {
              // Zoom in to the element but stop at 100 pixels (as in,
              // client pixels, ala what the browser thinks is a pixel in
              // most cases) around it
              elementExtraMarginForZoomInClientSpace: 100,
            },
            {
              durationMilliseconds: 1000,
            }
          );
        }
      }}
    >
      {children}
    </button>
  );
}
