import { skills } from "../../constan/skill";
import DetailView from "../detail-view";
import Icons from "../svg";

export default function SkillView() {
  return (
    <DetailView
      title="Skill"
      desc="The skills, tools and technologies I am really good at:"
      background="white"
    >
      <div className="h-12" />
      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12 w-full">
        {skills.map(({ icon, name, link }) => {
          const SelectedIcons = Icons[icon];
          return (
            <button
              onClick={() => {
                window.open(link, "_blank");
              }}
              className="flex flex-col items-center gap-y-2"
              key={name}
            >
              <div className="w-16 h-16">
                <SelectedIcons />
              </div>
              <div>{name}</div>
            </button>
          );
        })}
      </div>
    </DetailView>
  );
}
