import AboutView from "./component/about-view";
import HeaderView from "./component/header-view";
import { useThemeState } from "./state/theme_state";

function App() {
  const { mode } = useThemeState();
  return (
    <div className={`${mode === "dark" ? "dark " : "light"} h-screen w-screen`}>
      <div
        className={`h-screen w-screen flex flex-col overflow-y-scroll font-inter no-scrollbar bg-light-gray-default dark:bg-dark-gray-default text-dark-gray-default dark:text-light-gray-default`}
      >
        <div className="h-full overflow-y-scroll w-full no-scrollbar">
          <HeaderView />
          <AboutView />
          <div className="h-[10000px]" />
        </div>
      </div>
    </div>
  );
}

export default App;
