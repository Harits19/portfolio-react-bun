import assets from "../../constan/assets";
import AboutViewDetail from "../about-view-detail";
import IconButton from "../icon-button";

export default function AboutView() {
  return (
    <div className="px-20 py-24 flex flex-row gap-x-12 text-body2">
      <div className="flex flex-col flex-1 gap-y-12">
        <div className="flex flex-col">
          <div className="text-h1-desktop">Hi, I'm Harits</div>
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
            left={<img src={assets.icon.location} />}
            right={"Jakarta, Indonesia"}
          />
          <AboutViewDetail
            left={<div className="w-2 h-2 bg-green-400 rounded-full" />}
            right={"Available for new project"}
          />
        </div>
        <div className="flex flex-row ">
          {[
            {
              icon: assets.icon.github,
              link: "https://github.com/Harits19 ",
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
      <div>
        <img
          src={assets.image.profileSquare}
          className="w-[280px] h-[320px] object-cover"
        />
      </div>
    </div>
  );
}
