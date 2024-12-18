import { useThemeState } from "../../state/theme_state";

export default function Divider() {
  const { mode } = useThemeState();

  return (
    <div
      className={`h-6 w-0.5 ${
        mode === "dark" ? "bg-ebony-clay" : "bg-gray-100"
      } `}
    />
  );
}
