import { menus } from "../../constan/menu";
import { kText } from "../../constan/text";

export default function LeftView() {
  return (
    <div className="flex flex-col w-1/2 overflow-hidden gap-y-2 p-16">
      <div className="text-5xl font-bold">{kText.abdullahHarits}</div>
      <div className="text-2xl">Fullstack Developer</div>
      <div className="text-xl">
        I build accessible, pixel-perfect digital experiences for the web.
      </div>
      <div className="h-10" />
      <div>
        {menus.map((item) => (
          <div className="flex flex-row items-center group cursor-grab">
            <div className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
            <div key={item.name} className="uppercase">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
