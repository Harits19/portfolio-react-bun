import { ReactNode } from "react";

export default function AboutViewDetail({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className="flex flex-row gap-x-2 items-center">
      <div className="flex flex-col items-center justify-center h-6 w-6">
        {left}
      </div>
      <div>{right}</div>
    </div>
  );
}
