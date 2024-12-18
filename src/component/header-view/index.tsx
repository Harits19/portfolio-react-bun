import assets from "../../constan/assets";
import { useThemeState } from "../../state/theme_state";
import Divider from "../divider";
import Spacer from "../spacer";

export default function HeaderView() {
  const { mode, setMode } = useThemeState();
  return (
    <div className="px-20 py-4 flex flex-row items-center">
      <div className="font-bold text-[30px]">{"<AbdullahHarits/>"}</div>
      <Spacer />
      <div className="flex flex-row gap-x-6 font-medium text-base text-gray-600">
        {["About", "Work", "Testimonials", "Contact"].map((item) => (
          <div key={item} className="">
            {item}
          </div>
        ))}

        <Divider />

        <button
          onClick={() => {
            if (mode === "dark") {
              setMode("light");
            } else {
              setMode("dark");
            }
          }}
        >
          <img
            src={mode === "dark" ? assets.icon.darkMode : assets.icon.lightMode}
          />
        </button>
      </div>
    </div>
  );
}
