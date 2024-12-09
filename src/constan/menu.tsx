import AboutView from "../component/about-view";
import ExperienceView from "../component/experience-view";
import ProjectView from "../component/project-view";

export const menus = [
  {
    name: "About",
    view: <AboutView />,
  },
  {
    name: "Project",
    view: <ProjectView />,
  },
  {
    name: "Experience",
    view: <ExperienceView />,
  },
];
