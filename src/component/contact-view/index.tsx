import { contact } from "../../constan/contact";
import DetailView from "../detail-view";
import IconButton from "../icon-button";
import SocialMediaView from "../social-media-view";
import Icons from "../svg";

export default function ContactView() {
  return (
    <DetailView
      title="Get in touch"
      desc={`What’s next? Feel free to reach out to me if you're looking for \n a developer, have a query, or simply want to connect.`}
      background="white"
    >
      <div className="mt-12 flex flex-col items-center gap-y-4">
        {contact.map(({ icon, value }) => {
          const SelectedIcons = Icons[icon];
          return (
            <div className="flex flex-row gap-x-5 items-center">
              <div className="h-8 w-8">
                <SelectedIcons />
              </div>
              <span className="text-h2-desktop font-semibold text-light-gray-900 dark:text-dark-gray-900">
                {value}
              </span>
              <IconButton
                icon="Copy"
                onClick={() => {
                  navigator.clipboard.writeText(value);
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="h-12" />
      <div className="text-body2 text-light-gray-600 dark:text-dark-gray-600">
        You may also find me on these platforms!
      </div>
      <SocialMediaView />
    </DetailView>
  );
}
