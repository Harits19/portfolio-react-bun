import { useState } from "react";
import LeftView from "../left-view";
import RightView from "../right-view";
import MousePointer from "../mouse-pointer";



export default function PlaygroundView() {

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