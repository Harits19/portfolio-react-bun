import HeaderView from "./component/header-view";
import { useThemeState } from "./state/theme_state";

function App() {
  const { mode } = useThemeState();
  return (
    <html className={`${mode === "dark" ? "dark " : "light"}`}>
      <div
        className={`h-screen w-screen flex flex-col font-inter bg-light-gray-default dark:bg-dark-gray-default text-dark-gray-default dark:text-light-gray-default`}
      >
        <HeaderView />
      </div>
    </html>
  );
}

export default App;
