import { ReactNode } from "react";
import Tag from "../tag";

export default function DetailView({
  title,
  desc,
  children,
  background = "gray",
}: {
  title: string;
  desc?: string;
  children: ReactNode;
  background?: "white" | "gray";
}) {
  return (
    <div
      className={`w-full ${
        background == "gray"
          ? "bg-light-gray-50 dark:bg-dark-gray-50"
          : "bg-light-gray-default dark:bg-dark-gray-default"
      } px-20 py-24 flex flex-col items-center `}
    >
      <Tag>{title}</Tag>
      <div className="h-4" />
      {desc && (
        <div className="text-subtitle-desktop text-light-gray-600 dark:text-dark-gray-600 whitespace-pre-line text-center">
          {desc}
        </div>
      )}
      {children}
    </div>
  );
}
