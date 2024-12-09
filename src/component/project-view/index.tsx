import { useState } from "react";
import { kText } from "../../constan/text";

export default function ProjectView() {
  const [selectedHover, setSelectedHover] = useState<number>();

  return (
    <div
      onMouseLeave={() => {
        setSelectedHover(undefined);
      }}
    >
      <div className="overflow-scroll">
        {kText.projects.map((item, index) => {
          const isHover =
            selectedHover === index || selectedHover === undefined;
          return (
            <div
              onMouseEnter={() => {
                setSelectedHover(index);
              }}
              key={index}
              className={`h-[100px] flex flex-row  rounded m-4  ${
                isHover ? "" : "opacity-30"
              }`}
            >
              <img src="/ayolunas.png" />
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
