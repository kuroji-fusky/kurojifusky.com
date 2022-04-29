import Link from "next/link";
import ProjectCard from "../components/cards/ProjectCard";
import SEO from "../components/SEO";
import styles from "../styles/Layout.module.scss";

export default function Home() {
  return (
    <>
      <SEO title="Home" description="A landing page for my awful website" />
      <div>
        <div className={`${styles.section} ${styles["hero-bio"]}`}>
          <div id={styles["hero-bio-info"]}>
            <h1>Official website for this loser</h1>
            <p>Skep is gay lol</p>
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
        <div className={`${styles.section} flex-col`}>
          <div className={styles["section-header"]}>
            <h2>🌟 Featured Projects</h2>
            <Link href="/projects">See moar</Link>
          </div>
          <div id={styles["project-grid"]}>
            <ProjectCard
              image="/img/avatar/01.png"
              title="This awful website"
              description="Project description"
              link="https://github.com/skepfusky/skepfusky-website"
            />
            <ProjectCard
              title="Paco Drawing Stats"
              description="Project description"
              link="https://github.com/skepfusky/pandapaco-drawing-stats"
            />
            <ProjectCard
              title="ReadyBot"
              description="Create Discord bots with ease!"
              link="https://github.com/skepfusky/ReadyBot"
            />
            <ProjectCard
              title="Majira Strawberry VS Code Theme"
              description="Increase your productivity by 69% and furry pride with your favorite furry YouTuber by coding with this theme!"
              link="https://github.com/skepfusky/majira-strawberry-vscode"
            />
            <ProjectCard
              title="Some UI concept"
              description="Project description"
              link="https://github.com/skepfusky/voicemeeter-modern-ui-concept"
            />
          </div>
        </div>
        <hr />
        <div className={`${styles.section} flex-col`}>
          <div className={styles["section-header"]}>
            <h2>🎵 Music stuffs</h2>
            <Link href="/projects">See moar</Link>
          </div>
        </div>
        <hr />
        <div className={`${styles.section} flex-col`}>
          <div className={styles["section-header"]}>
            <h2>📝 Proficency</h2>
          </div>
        </div>
      </div>
    </>
  );
};