import { testimonials } from "../../constan/testimonials";
import DetailView from "../detail-view";

export default function TestimonialView() {
  return (
    <DetailView
      title="Testimonials"
      desc="Nice things people have said about me:"
    >
      <div className="mt-12 flex flex-row justify-center items-center gap-x-12">
        {testimonials.map(({ desc, image, name, relation }) => (
          <div className="flex flex-col items-center p-12 rounded-xl shadow-md gap-y-6 h-[428px] bg-light-gray-default dark:bg-dark-gray-default">
            <img
              src={image}
              className="h-16 w-16 object-cover rounded-full overflow-hidden"
            />
            <span className="text-body2 text-light-gray-600 dark:text-dark-gray-600 ">
              {desc}
            </span>
            <div className="flex flex-col items-center">
              <span className="text-subtitle-desktop font-semibold text-light-gray-900 dark:text-dark-gray-900">
                {name}
              </span>
              <span className="text-body3 text-light-gray-600 dark:text-dark-gray-600">
                {relation}
              </span>
            </div>
          </div>
        ))}
      </div>
    </DetailView>
  );
}
