import assets from "../../constan/assets";
import AboutViewDetail from "../about-view-detail";
import ImageView from "../image-view";
import SocialMediaView from "../social-media-view";
import Icons from "../svg";

export default function AboutView() {
  return (
    <div className="px-20 py-24 flex flex-row gap-x-12 text-body2">
      <div className="flex flex-col flex-1 gap-y-12">
        <div className="flex flex-col mr-28">
          <div className="text-h1-desktop flex flex-row">
            Hi, I'm Harits <div className="-mt-2 animate-wiggle">👋</div>
          </div>
          <div className="text-body2">
            I have experience as a full stack developer but I'm only confident
            in mobile app development. I have an interest in a career related to
            Flutter, Go, React Native, and the latest technologies or
            frameworks. Known as a fast learner and likes to work on projects on
            time.
          </div>
        </div>
        <div>
          <AboutViewDetail
            left={<Icons.Location />}
            right={"Jakarta, Indonesia"}
          />
          <AboutViewDetail
            left={
              <>
                <div className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-emerald-400 opacity-75" />
                <div className="w-3 h-3 bg-green-400 rounded-full" />
              </>
            }
            right={"Available for new project"}
          />
        </div>
        <SocialMediaView />
      </div>
      <ImageView src={assets.image.profileSquare} />
    </div>
  );
}
