import Icons from "../svg";

export default function CopyRightView() {
  return (
    <div className="p-6 flex flex-row items-center justify-center bg-light-gray-50 dark:bg-dark-gray-50">
      <div className="h-4 w-4">
        <Icons.Copyright />
      </div>
      <div className="w-2" />
      <span className="text-body3 text-light-gray-600">
        2024 |{" "}
        <a
          className="underline"
          target="_blank"
          href="https://www.figma.com/community/file/1262992249991763120/personal-portfolio-website-template-mobile-desktop"
        >
          Designed
        </a>{" "}
        by{" "}
        <a className="underline" href="https://sagarshah.dev/" target="_blank">
          Sagar Shah
        </a>{" "}
        and Coded with <span className="text-red-500">❤</span> By Abdullah
        Harits
      </span>
    </div>
  );
}
