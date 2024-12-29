import AboutMeView from "../component/about-me-view";
import ContactView from "../component/contact-view";
import ExperienceView from "../component/experience-view";
import SkillView from "../component/skill-view";
import TestimonialView from "../component/testimonial-view";
import WorkView from "../component/work-view";

export const menus = [
  {
    name: "About",
    view: <AboutMeView />,
  },
  {
    name: "Skills",
    view: <SkillView />,
  },
  {
    name: "Experience",
    view: <ExperienceView />,
  },
  {
    name: "Work",
    view: <WorkView />,
  },

  {
    name: "Testimonials",
    view: <TestimonialView />,
  },
  {
    name: "Contact",
    view: <ContactView />,
  },
];
