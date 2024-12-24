import assets from "../../constan/assets";
import AboutViewDetail from "../about-view-detail";
import IconButton from "../icon-button";
import ImageView from "../image-view";
import Icons, { IconType } from "../svg";

export default function AboutView() {
  return (
    <div className="px-20 py-24 flex flex-row gap-x-12 text-body2">
      <div className="flex flex-col flex-1 gap-y-12">
        <div className="flex flex-col mr-28">
          <div className="text-h1-desktop flex flex-row">
            Hi, I'm Harits <div className="-mt-2 animate-wiggle">👋</div>
          </div>
          <div className="text-body2">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
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
        <div className="flex flex-row ">
          {[
            {
              icon: "Github" as IconType,
              link: "https://github.com/Harits19",
            },
            {
              icon: "Linkedin" as IconType,
              link: "https://linkedin.com/in/abd-harits",
            },
            {
              icon: "Instagram" as IconType,
              link: "https://instagram.com/abd.harits19",
            },
          ].map((item) => (
            <IconButton
              icon={item.icon}
              onClick={() => {
                window.open(item.link, "_blank");
              }}
            />
          ))}
        </div>
      </div>
      <ImageView src={assets.image.profileSquare} />
    </div>
  );
}
