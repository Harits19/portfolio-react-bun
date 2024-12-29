import { experiences } from "../../constan/experience";
import DetailView from "../detail-view";

export default function ExperienceView() {
  return (
    <DetailView
      title="Experience"
      desc="Here is a quick summary of my most recent experiences:"
    >
      <div className="h-12" />
      <div className="flex flex-col gap-y-12">
        {experiences.map(({ company, image, jobDesk, position, time }) => (
          <div className="flex flex-row gap-x-12 w-[896px] justify-between items-start  p-8 rounded-xl shadow-sm bg-light-gray-default dark:bg-dark-gray-default">
            <img src={image} className="w-[100px] object-contain" />
            <div className="flex flex-1" />

            <div className="flex flex-col min-w-[384px] w-[384px] whitespace-pre-wrap">
              <span className="text-subtitle-desktop font-semibold text-light-gray-900 dark:text-dark-gray-900">
                {position}
              </span>
              <span className="text-xs italic font-semibold text-light-gray-900 dark:text-dark-gray-900">
                {company}
              </span>
              <div className="h-4" />
              <ul className="text-body2 text-light-gray-600 dark:text-dark-gray-600">
                {jobDesk.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <span className="text-body2 text-light-gray-700 dark:text-dark-gray-700 flex flex-1">
              {time}
            </span>
          </div>
        ))}
      </div>
    </DetailView>
  );
}
