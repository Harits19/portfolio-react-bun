import { menus } from "../../constan/menu";

export default function RightView() {
  return (
    <div className="flex flex-col w-1/2  h-full overflow-y-scroll p-16">
      {menus.map((item) => item.view)}
    </div>
  );
}
