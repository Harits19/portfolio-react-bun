export default function ImageView({
  src,
  borderColor = '',
}: {
  src: string;
  borderColor?: string;
}) {
  const RenderImage = () => (
    <img
      src={src}
      className={`w-[280px] h-[320px] object-cover border-8 border-light-gray-default dark:border-dark-gray-default ${borderColor}`}
    />
  );
  return (
    <div className="relative flex flex-col">
      <div className="w-[280px] h-[320px]    left-7 top-7 absolute z-auto bg-light-gray-200 dark:bg-dark-gray-200" />
      <div className="opacity-0">
        <RenderImage />
      </div>
      <div className="absolute">
        <RenderImage />
      </div>
    </div>
  );
}
