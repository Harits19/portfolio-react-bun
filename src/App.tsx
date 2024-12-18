import HeaderView from "./component/header-view";
import { useThemeState } from "./state/theme_state";

function App() {

  const {mode} = useThemeState()
  return (
    <div className={`h-screen w-screen flex flex-col font-inter ${mode === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <HeaderView />
    </div>
  );
}

export default App;
