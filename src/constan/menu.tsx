import AboutMeView from "../component/about-me-view";
import ContactView from "../component/contact-view";
import TestimonialView from "../component/testimonial-view";
import WorkView from "../component/work-view";

export const menus = [
  {
    name: "About",
    view: <AboutMeView />,
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
