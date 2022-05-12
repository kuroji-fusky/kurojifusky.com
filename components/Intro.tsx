export default function Intro() {
  const skills = [
    "Full-stack web development",
    "Web and UI/UX Design",
    "Indie music artist",
    "Experienced video editor",
    "Filmmaker",
    "Novice VFX artist",
  ];

  return (
    <>
      <div id="scroll-dat-shit" className="section hero-bio">
        <article id="hero-bio-info">
          <h1>
            Hi, I'm <span id="highlight-scroll">skepfusky!</span>
          </h1>
          <p>
            Or just simply <span id="highlight">Skep</span>, or also known by my
            stage name <span id="highlight">Kokoro Husky</span> on streaming
            platforms -- I'm a 20-year-old self-employed and self-taught
            hobbyist from the Philippines!
          </p>
          <p>
            I'm not trying to be a celebrity, or even a{" "}
            <b>
              <i>popufur...</i>
            </b>{" "}
            I'm just trying to get my name out there as I'm extremely passionate
            about sharing and possibly inspiring future generations through my
            broad set of skills, talent, and art as a self-taught individual.
          </p>
          <div id="skill-inline">
            {skills.map((skill, i) => (
              <div id="skill-item" key={i}>
                {skill}
              </div>
            ))}
          </div>
        </article>
        <div id="hero-bio-svg">
          {/* todo: cringe svg here */}
          <img
            src="/static/avatars/07.png"
            alt="Skepfusky avatar"
            className="rounded-full w-[16rem]"
          />
        </div>
      </div>
      <div className="h-[100vh]"></div>
    </>
  );
};
