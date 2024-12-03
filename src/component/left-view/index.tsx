export default function LeftView() {
  const menus = ["Project", "About", "Experience"];
  return (
    <div className="flex bg-yellow-50 flex-col justify-center w-1/2 overflow-hidden">
      <div className="p-4">
        {menus.map((item) => (
          <div className="flex flex-row items-center group">
            <div className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
            <div key={item} className="uppercase">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
