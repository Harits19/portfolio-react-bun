import { ReactNode } from "react";

export default function IconButton({
  icon,
  onClick,
}: {
  onClick: () => void;
  icon: ReactNode;
}) {
  return (
    <button
      className="hover:bg-light-gray-100 p-1.5 rounded-lg dark:hover:bg-dark-gray-100 "
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
