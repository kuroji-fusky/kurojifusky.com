/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SEO from "../components/SEO";
import ProjectCard, { ProjectCardSkeleBoi } from "../components/cards/ProjectCard";
import styles from "../styles/Layout.module.scss";

export default function Home() {
  return (
    <>
      <SEO title="Home" description="A landing page for my awful website" />
      <div>
        <div className={`${styles.section} ${styles["hero-bio"]}`}>
          <div id={styles["hero-bio-info"]}>
            <h1>Official website for this loser</h1>
            <p>
              Hi! I&#39;m skepfusky, or simply as Skep, or also known by my
              stage name Kokoro Husky on streaming platforms; I&#39;m a
              20-year-old high school graduate immediate college dropout
              self-employed, and self-taught from the Philippines!
            </p>
            <p>
              I&#39;m not trying to be a celebrity, or even a <b><i>popufur...</i></b> No,
              I&#39;m just trying to get my name out there as I&#39;m extremely
              passionate about sharing and possibly inspiring future generations
              through my broad set of skills, talent, and art as a self-taught
              individual.
            </p>
            <p>
              I have an equal passion for programming, music production, and
              filmmaking!
            </p>
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
            <h3>🌟 FEATURED PROJECTS</h3>
            <Link href="/projects">See moar</Link>
          </div>
          <div id={styles["project-grid"]}>
            <ProjectCard
              image="/img/avatars/08.png"
              title="This awful website"
              description="This website you're browsing right now lol -- written in Next.js."
              repoLink="skepfusky/skepfusky-website"
            />
            <ProjectCard
              image="/img/paco-yt-icon.jpg"
              title="Paco Drawing Stats"
              description="A repository that collects a bunch drawing data from Paco Panda."
              repoLink="skepfusky/pandapaco-drawing-stats"
            />
            <ProjectCard
              image="/img/avatars/08.png"
              title="ReadyBot"
              description="Create Discord bots with ease!"
              repoLink="skepfusky/ReadyBot"
            />
            <ProjectCard
              image="/img/avatars/08.png"
              title="Majira Strawberry VS Code Theme"
              description="A VS Code theme based of Majira's fursona"
              repoLink="skepfusky/majira-strawberry-vscode"
            />
            <ProjectCard
              image="/img/avatars/08.png"
              title="Some UI concept"
              description="Project description"
              repoLink="skepfusky/voicemeeter-modern-ui-concept"
            />
          </div>
        </div>
        <hr />
        <div className={styles.section}>
          <div className={styles["section-header"]}>
            <h3>🌟 PROJECTS I&#39;VE CONTRIBUTED</h3>
          </div>
          <div id={styles["project-grid"]}>
            <ProjectCard
              image="/img/avatars/08.png"
              title="MyFursona"
              description="An open source project where you an manage your fursona(s)."
              repoLink="MyFursona-Project/MyFursona"
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
      </div>
    </>
  );
}
