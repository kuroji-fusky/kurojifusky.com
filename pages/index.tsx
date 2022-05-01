/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BaseSEOLanding } from "../components/BaseSEO";
import ProjectCard, { ProjectCardSkeleBoi } from "../components/cards/ProjectCard";
import styles from "../styles/Layout.module.scss";

export default function Home() {
  const skills = [
    "Full-stack web development",
    "Web and UI/UX Design",
    "Indie music artist",
    "Filmmaker",
    "Novice VFX artist",
    "Performer",
    "Doin your mom"
  ];

  return (
    <>
      <BaseSEOLanding />
      <article>
        <div className={`${styles.section} ${styles["hero-bio"]}`}>
          <div id={styles["hero-bio-info"]}>
            <h1>Official website for this loser</h1>
            <p>
              Hi! I&#39;m skepfusky, or simply as Skep, or also known by my
              stage name Kokoro Husky on streaming platforms -- I&#39;m a
              20-year-old high school graduate immediate college dropout
              self-employed, and self-taught from the Philippines!
            </p>
            <p>
              I&#39;m not trying to be a celebrity, or even a{" "}
              <b>
                <i>popufur...</i>
              </b>{" "}
              No, I&#39;m just trying to get my name out there as I&#39;m
              extremely passionate about sharing and possibly inspiring future
              generations through my broad set of skills, talent, and art as a
              self-taught individual.
            </p>
            <div id={styles["skill-inline"]}>
              {skills.map((skill, i) => (
                <div id={styles["skill-item"]} key={i}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div id={styles["hero-bio-svg"]}>
            {/* todo: cringe svg here */}
            <img
              src="/img/avatars/07.png"
              alt="Your mom"
              className="rounded-full w-[200px]"
            />
          </div>
        </div>
        <hr />
        <div className={styles.section}>
          <div className={styles["section-header"]}>
            <h3>✨ FEATURED DEVELOPER PROJECTS</h3>
            {/* <Link href="/projects">See moar</Link> */}
          </div>
          <div id={styles["project-grid"]}>
            {/* <ProjectCardSkeleBoi /> */}
            <ProjectCard
              image="/img/avatars/08.png"
              title="This awful website"
              description="This terrible website you're browsing written in Next.js"
              repoLink="skepfusky/skepfusky-website"
            />
            <ProjectCard
              image="/img/paco-yt-icon.jpg"
              title="Paco Drawing Stats"
              description="A repository that collects a bunch drawing data from Paco Panda, written in Python and Next.js"
              pageLink="/works/paco-drawing-stats"
              repoLink="skepfusky/pandapaco-drawing-stats"
            />
            <ProjectCard
              image="/img/tessinator.png"
              title="Tessinator"
              description="A boring Discord bot that does nothing interesting"
              repoLink="skepfusky/tessinator"
            />
            <ProjectCard
              image="/img/majira-vscode.png"
              title="Majira Strawberry VS Code Theme"
              description="A VS Code theme based of Majira's fursona"
              repoLink="skepfusky/majira-strawberry-vscode"
            />
            <ProjectCard
              image="/img/myfursona.png"
              title="MyFursona"
              description="An open source project where you an manage your fursona(s)"
              repoLink="MyFursona-Project/MyFursona"
              extLink="https://www.myfursona.art"
            />
            <ProjectCard
              image="/img/myfursona.png"
              title="Fursuit Detector"
              description="This is pretty much self-explanatory"
              repoLink="OpenFurs/fursuit-detector-web"
            />
          </div>
        </div>
        <hr />
        <div className={styles.section}>
          <div className={styles["section-header"]}>
            <h3>🌐 WEBSITES I MADE</h3>
          </div>
          <div id={styles["project-grid"]}>
            <ProjectCard
              image="/img/myfursona.png"
              title="Plainrock124 Website"
              description="My reindition of what his website will look like"
              repoLink="skepfusky/plainrock124-website"
            />
          </div>
        </div>
        <hr />
        <div className={styles.section}>
          <div className={styles["section-header"]}>
            <h3>💜 PROJECTS I&#39;VE CONTRIBUTED</h3>
          </div>
          <div id={styles["project-grid"]}>
            <ProjectCard
              image="/img/myfursona.png"
              title="MyFursona"
              description="An open source project where you an manage your fursona(s)"
              repoLink="MyFursona-Project/MyFursona"
              extLink="https://www.myfursona.art"
            />
            <ProjectCard
              image="/img/myfursona.png"
              title="Fursuit Detector"
              description="This is pretty much self-explanatory"
              repoLink="OpenFurs/fursuit-detector-web"
            />
          </div>
        </div>
        <hr />
        <div className={styles.section}>
          <div className={styles["section-header"]}>
            <h3>🎵 DISCOGRAPHY</h3>
            <Link href="/projects">See moar</Link>
          </div>
        </div>
        <hr />
        <div className={styles.section}>
          <div className={styles["section-header"]}>
            <h3>📝 PROFICENCY</h3>
          </div>
        </div>
      </article>
    </>
  );
}
