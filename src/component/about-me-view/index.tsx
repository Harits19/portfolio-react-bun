import assets from "../../constan/assets";
import DetailView from "../detail-view";
import ImageView from "../image-view";

export default function AboutMeView() {
  return (
    <DetailView title="About Me">
      <div className="h-12" />
      <div className="flex flex-row items-center gap-x-28">
        <ImageView
          src={assets.image.profileSquare}
          borderColor="border-light-gray-50 dark:border-dark-gray-50"
        />
        <div className="flex flex-col flex-1">
          <div className="text-h3-desktop font-semibold">
            Curious about me? Here you have it:
          </div>
          <p className="text-body2">
            <br />
            I have experience as a full stack developer but I'm only confident
            in mobile app development. I have an interest in a career related to
            Flutter, Go, React Native, and the latest technologies or
            frameworks. Known as a fast learner and likes to work on projects on
            time.
            <br />
            <br />
          </p>
        
        </div>
      </div>
    </DetailView>
  );
}
