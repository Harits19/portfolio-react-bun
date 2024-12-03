import { useState } from "react";
import MousePointer from "./component/mouse-pointer";

function App() {
  const [mousePointer, setMousePointer] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      className="h-screen w-screen flex flex-row relative"
      onMouseMove={(event) => {
        const { clientX, clientY } = event;
        setMousePointer({ x: clientX, y: clientY });
      }}
    >
      <MousePointer x={mousePointer.x} y={mousePointer.y} />
    </div>
  );
}

export default App;
