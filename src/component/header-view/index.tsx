import { menus } from "../../constan/menu";
import { useScrollState } from "../../state/scroll_state";
import { useThemeState } from "../../state/theme_state";
import Button from "../button";
import Divider from "../divider";
import IconButton from "../icon-button";
import Spacer from "../spacer";

export default function HeaderView() {
  const { mode, setMode } = useThemeState();

  const isScrolled = useScrollState();

  const openNewTab = (link: string) => {
    window.open(link, "_blank");
  };

  const baseUrl =
    "https://docs.google.com/document/d/1sG-A9ulHr12cY02n_0s_DS6hUrgpGsopaEGPfsZP0uo";
  return (
    <div
      className={`px-20 py-4 flex flex-row items-center   ${
        isScrolled
          ? "backdrop-blur-xl border-light-gray-100 dark:border-dark-gray-100 "
          : ""
      }`}
    >
      <div className="font-bold text-[30px]">{"<AbdullahHarits/>"}</div>
      <Spacer />
      <div
        className={`flex flex-row gap-x-6 font-medium text-base items-center `}
      >
        {menus.map((item) => (
          <button
            onClick={() => {
              document
                .getElementById(item.name)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            key={`${item.name}-menu`}
            className={` text-light-gray-600 dark:text-dark-gray-600`}
          >
            {item.name}
          </button>
        ))}

        <Divider />

        <IconButton
          icon={mode === "dark" ? "DarkMode" : "LightMode"}
          onClick={() => {
            if (mode === "dark") {
              setMode("light");
            } else {
              setMode("dark");
            }
          }}
        />
        <div className="flex flex-row items-center gap-x-1">
          <Button
            onClick={() => {
              openNewTab(baseUrl);
            }}
          >
            See CV
          </Button>
          <Button
            onClick={() => {
              const downloadUrl = `${baseUrl}/export?format=pdf`;
              openNewTab(downloadUrl);
            }}
          >
            Download CV
          </Button>
          <Button
            onClick={() => {
              openNewTab("https://harits19.github.io");
            }}
          >
            Flutter Web Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
