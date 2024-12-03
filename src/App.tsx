import { useState } from "react";
import MousePointer from "./component/mouse-pointer";
import LeftView from "./component/left-view";
import RightView from "./component/right-view";

function App() {
  const [mousePointer, setMousePointer] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      className="w-full h-full flex flex-row "
      onMouseMove={(event) => {
        const { clientX, clientY } = event;
        setMousePointer({ x: clientX, y: clientY });
      }}
    >
      <LeftView />
      <RightView />

      <MousePointer x={mousePointer.x} y={mousePointer.y} />
    </div>
  );
}

export default App;
