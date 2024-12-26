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
    <div className="relative flex flex-col w-fit">
      <div className="w-[280px] h-[320px] ml-7 mt-7 bg-light-gray-200 dark:bg-dark-gray-200" />

      <div className="absolute">
        <RenderImage />
      </div>
    </div>
  );
}
