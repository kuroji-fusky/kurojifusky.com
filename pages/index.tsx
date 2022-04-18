import BaseHead from "../components/BaseHead";
import IntroButtons from "../components/IntroButtons";

export default function Home() {
  return (
    <>
      <BaseHead
        title="CRAZY FOR MYSELF"
        description="A landing page for my awful website"
      />
      <div className="h-[100vh] grid place-items-center">
        <div className="gap-x-5 flex justify-center">
          <IntroButtons title="Projects" link="projects" />
          <IntroButtons title="About Me" link="about-me" />
          <IntroButtons title="Contact" link="contact" />
        </div>
      </div>
      <div>&copy; {new Date().getFullYear()} skepfusky, all rights reserved.</div>
    </>
  );
};