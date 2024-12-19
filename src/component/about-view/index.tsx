import assets from "../../constan/assets";
import AboutViewDetail from "../about-view-detail";
import IconButton from "../icon-button";
import Icons from "../svg";

export default function AboutView() {
  const RenderImage = () => (
    <img
      src={assets.image.profileSquare}
      className="w-[280px] h-[320px] object-cover border-8 border-light-gray-default dark:border-dark-gray-default "
    />
  );
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
              icon: <Icons.Github />,
              link: "https://github.com/Harits19",
            },
            {
              icon: <Icons.Github />,
              link: "https://linkedin.com/in/abd-harits",
            },
            {
              icon: <Icons.Github />,
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
      <div className="relative flex flex-col">
        <div className="w-[280px] h-[320px]    left-7 top-7 absolute z-auto bg-light-gray-200 dark:bg-dark-gray-200" />
        <div className="opacity-0">
          <RenderImage />
        </div>
        <div className="absolute">
          <RenderImage />
        </div>
      </div>
    </div>
  );
}
