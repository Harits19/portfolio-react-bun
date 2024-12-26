import assets from "../../constan/assets";
import DetailView from "../detail-view";
import ImageView from "../image-view";

export default function AboutMeView() {
  return (
    <DetailView title="About Me">
      <div className="h-12" />
      <div className="flex flex-row items-center gap-x-28">
        <ImageView
          src={assets.image.profileSquare}
          borderColor="border-light-gray-50 dark:border-dark-gray-50"
        />
        <div className="flex flex-col flex-1">
          <div className="text-h3-desktop font-semibold">
            Curious about me? Here you have it:
          </div>
          <p className="text-body2">
            <br />
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
            <br />
            <br />I began my journey as a web developer in 2015, and since then,
            I've continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
            <br />
            <br />I am very much a progressive thinker and enjoy working on
            products end to end, from ideation all the way to development.
            <br />
            <br />
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
            <br />
            <br />
          </p>
          <div className="columns-2">
            <li>B.E. in Computer Engineering</li>
            <li>Full time freelancer</li>
            <li>Avid learner</li>
            <li>Aspiring indie hacker</li>
          </div>

          <p>
            <br />
            Finally, some quick bits about me. One last thing, I'm available for
            freelance work, so feel free to reach out and say hello! I promise I
            don't bite 😉
          </p>
        </div>
      </div>
    </DetailView>
  );
}
