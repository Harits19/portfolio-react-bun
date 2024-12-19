import Icons, { IconType } from "../svg";

export default function IconButton({
  icon,
  onClick,
}: {
  onClick: () => void;
  icon: IconType;
}) {
  const SelectedIcons = Icons[icon];
  return (
    <button
      className="hover:bg-light-gray-100 p-1.5 rounded-lg dark:hover:bg-dark-gray-100 w-10 h-10"
      onClick={onClick}
    >
      <SelectedIcons />
    </button>
  );
}
