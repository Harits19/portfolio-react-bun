import { useState } from "react";

export default function RightView() {
  const [selectedHover, setSelectedHover] = useState<number>();
  return (
    <div
      className="flex flex-col w-1/2 bg-green-300 h-full overflow-y-scroll"
      onMouseLeave={() => {
        setSelectedHover(undefined);
      }}
    >
      <div className="overflow-scroll">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
          (item, index) => {
            const isHover =
              selectedHover === index || selectedHover === undefined;
            return (
              <div
                onMouseEnter={() => {
                  setSelectedHover(index);
                }}
                key={index}
                className={`h-[100px] flex flex-col border shadow-2xl rounded m-4 bg-white border-black justify-center items-center  ${
                  isHover ? "" : "opacity-30"
                }`}
              >
                {index}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
