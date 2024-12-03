export default function MousePointer({
  x = 0,
  y = 0,
}: {
  x?: number;
  y?: number;
}) {
  const pointerSize = 40;
  const halfSize = pointerSize / 2;
  return (
    <div
      className={` bg-red-400 fixed`}
      style={{
        top: y - halfSize,
        left: x - halfSize,
        width: pointerSize,
        height: pointerSize,
        borderRadius: pointerSize,
        opacity: 0.3,
      }}
    />
  );
}
