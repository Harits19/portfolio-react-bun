import { ReactNode } from "react";

export default function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children?: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-[6px] rounded-xl bg-light-gray-900 dark:bg-dark-gray-900 text-body2 text-light-gray-50 dark:text-dark-gray-50"
    >
      {children}
    </button>
  );
}
