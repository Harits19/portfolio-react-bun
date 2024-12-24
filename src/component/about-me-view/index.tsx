import assets from "../../constan/assets";
import ImageView from "../image-view";

export default function AboutMeView() {
  return (
    <div className="w-full bg-light-gray-50 dark:bg-dark-gray-50 px-20 py-24 flex flex-col items-center gap-y-12">
      <div className=" bg-light-gray-200 dark:bg-dark-gray-200 text-body2 text-light-gray-600 dark:text-dark-gray-600 px-5 rounded-xl">
        About Me
      </div>
      <div className="flex flex-row">
        <ImageView
          src={assets.image.profileSquare}
          borderColor="border-light-gray-50 dark:border-dark-gray-50"
        />
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
}
