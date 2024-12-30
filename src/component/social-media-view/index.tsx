import IconButton from "../icon-button";
import { IconType } from "../svg";

export default function SocialMediaView() {
  return (
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
  );
}
