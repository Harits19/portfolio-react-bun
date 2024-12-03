export default function MousePointer({
  x = 0,
  y = 0,
}: {
  x?: number;
  y?: number;
}) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute`}
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
}
