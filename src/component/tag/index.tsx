import { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <div className=" bg-light-gray-200 dark:bg-dark-gray-200 text-body3 text-light-gray-600 dark:text-dark-gray-600 px-5 rounded-xl">
      {children}
    </div>
  );
}
