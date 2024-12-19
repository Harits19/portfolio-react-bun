import { useScrollState } from "../../state/scroll_state";
import { useThemeState } from "../../state/theme_state";
import Button from "../button";
import Divider from "../divider";
import IconButton from "../icon-button";
import Spacer from "../spacer";
import Icons from "../svg";

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
          ? "backdrop-blur-xl border-light-gray-100 dark:border-dark-gray-100 bg-light-gray-50 dark:bg-dark-gray-50"
          : ""
      }`}
    >
      <div className="font-bold text-[30px]">{"<AbdullahHarits/>"}</div>
      <Spacer />
      <div
        className={`flex flex-row gap-x-6 font-medium text-base items-center `}
      >
        {["About", "Work", "Testimonials", "Contact"].map((item) => (
          <div
            key={item}
            className={` text-light-gray-600 dark:text-dark-gray-600`}
          >
            {item}
          </div>
        ))}

        <Divider />

        <IconButton
          icon={mode === "dark" ? <Icons.DarkMode /> : <Icons.LightMode />}
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
        </div>
      </div>
    </div>
  );
}
