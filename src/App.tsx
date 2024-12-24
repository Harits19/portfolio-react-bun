import { useRef, useState } from "react";
import AboutView from "./component/about-view";
import HeaderView from "./component/header-view";
import { useThemeState } from "./state/theme_state";
import { ScrollContext } from "./state/scroll_state";
import { menus } from "./constan/menu";

function App() {
  const { mode } = useThemeState();
  const [scrollTop, setScrollTop] = useState(0);
  const isScrolled = scrollTop > 0;
  const ref = useRef<HTMLDivElement>(null);
  return (
    <ScrollContext.Provider value={isScrolled}>
      <div
        className={`${mode === "dark" ? "dark " : "light"} h-screen w-screen`}
      >
        <div
          className={`h-screen w-screen flex flex-col overflow-y-scroll font-inter no-scrollbar bg-light-gray-default dark:bg-dark-gray-default text-dark-gray-default dark:text-light-gray-default`}
        >
          <div className="fixed top-0 w-full">
            <HeaderView />
          </div>
          <div
            ref={ref}
            className="h-full overflow-y-scroll w-full no-scrollbar"
            onScroll={() => {
              setScrollTop(ref.current?.scrollTop ?? 0);
            }}
          >
            <div className="opacity-0 pointer-events-none">
              <HeaderView />
            </div>
            <AboutView />
            {menus.map(({ name, view }) => (
              <div id={name}>{view}</div>
            ))}
            <div className="h-[10000px]" />
          </div>
        </div>
      </div>
    </ScrollContext.Provider>
  );
}

export default App;
