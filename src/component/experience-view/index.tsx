import DetailView from "../detail-view";

export default function ExperienceView() {
  return (
    <DetailView
      title="Experience"
      desc="Here is a quick summary of my most recent experiences:"
    >
      {[1, 1, 1, 1].map(() => (
        <div className="flex flex-row gap-x-12">
          
        </div>
      ))}
    </DetailView>
  );
}
