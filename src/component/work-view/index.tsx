import { work } from "../../constan/work";
import DetailView from "../detail-view";
import IconButton from "../icon-button";
import Tag from "../tag";

export default function WorkView() {
  return (
    <DetailView
      title="Work"
      background="white"
      desc="Some of the noteworthy projects I have built:"
    >
      <div className="gap-y-12 mt-12 flex flex-col">
        {work.map(({ desc, image, link, name, skill }, index) => {
          const isReverse = index * 2 === 0;
          return (
            <div
              className={`flex ${
                isReverse ? "flex-row-reverse" : "flex-row"
              } rounded-xl overflow-hidden shadow-lg h-[480px]`}
            >
              <div className="w-[576px] h-full p-12 bg-light-gray-50 dark:bg-dark-gray-50 relative">
                <div className="rounded-lg shadow-md overflow-hidden relative w-full h-full ">
                  <img
                    src={image}
                    className="h-full w-full object-contain object-left absolute z-10 bg-white bg-opacity-30"
                  />
                  <img
                    src={image}
                    className="h-full blur w-full object-cover object-left rounded-lg shadow-md"
                  />
                </div>
              </div>
              <div className="w-[576px] h-full p-12 bg-light-gray-default dark:bg-dark-gray-100 flex flex-col gap-y-6">
                <span className="text-subtitle-desktop font-semibold text-light-gray-900 dark:text-dark-gray-900">
                  {name}
                </span>
                <span className="line-clamp-4 text-body2 text-light-gray-600 dark:text-dark-gray-600">
                  {desc}
                </span>
                <div className="flex flex-wrap w-full gap-2">
                  {skill.map((item) => (
                    <Tag>{item}</Tag>
                  ))}
                </div>
                <IconButton
                  icon="Link"
                  onClick={() => {
                    window.open(link, "_blank");
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </DetailView>
  );
}
