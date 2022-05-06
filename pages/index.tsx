import React from "react";
import dynamic from "next/dynamic";
import { ContainerBaseSEO } from "../components/Container";
import { ProjectCard, CardSkeleton, ChannelCard } from "../components/Cards";
import Intro from "../components/Intro";
import ShowcaseSection from "../components/ShowcaseSection";

// const ProjectCard = dynamic(() => import("../components/Cards"), {
//   loading: () => <CardSkeleton />,
//   ssr: false,
// });

export default function Home() {
  return (
    <ContainerBaseSEO>
      <div className="relative z-[69]">
        <Intro />
      </div>
      <div className="relative z-[70] blanket-dat-hoe">
        <ShowcaseSection
          heading="Shitty Channels"
          emojiKey="📺"
          sectionClassName="grid gap-8 mx-auto w-[90%] text-center md:grid-flow-row"
          sectionStyles={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          <ChannelCard
            image="/static/avatars/08.png"
            title="skepfusky"
            description="The main source for abominations"
          />
          <ChannelCard
            image="/static/avatars/08_2.png"
            title="codefusky"
            description="Some web development shenanigans"
          />
        </ShowcaseSection>
        <hr />
        <ShowcaseSection
          heading="Shitty Projects"
          emojiKey="✨"
          sectionId="project-grid"
        >
          <ProjectCard
            image="/static/projects/paco-yt-icon.jpg"
            title="Paco Drawing Stats"
            description="A repository that collects a bunch drawing data from Paco Panda, written in Python and Next.js"
            pageLink="/portfolio/paco-drawing-stats"
            repoLink="skepfusky/pandapaco-drawing-stats"
          />
          <ProjectCard
            image="/static/avatars/08.png"
            title="This awful website"
            description="This terrible website you're currently browsing written in Next.js"
            repoLink="skepfusky/skepfusky-website"
          />
          <ProjectCard
            image="/static/projects/myfursona.png"
            title="MyFursona"
            description="An open source project where you an manage your fursona(s)"
            repoLink="MyFursona-Project/MyFursona"
            extLink="https://www.myfursona.art"
          />
        </ShowcaseSection>
        {/* <div className="section">
          <div className="section-header">
            <h3 style={{ "--emoji-key": '""' } as React.CSSProperties}>
              Featured Developer Projects
            </h3>
          </div>
          <div id="project-grid">
            
          </div>
        </div>
        <hr />
        <div className="section section-row">
          <div className="seperator">
            <div className="section-header">
              <h3 style={{ "--emoji-key": "'🌐'" } as React.CSSProperties}>
                Websites I've written
              </h3>
              still WIP lol
            </div>
          </div>
          <div className="seperator">
            <div className="section-header">
              <h3 style={{ "--emoji-key": "'💜'" } as React.CSSProperties}>
                Contributed Projects
              </h3>
              still WIP lol
            </div>
          </div>
        </div> */}
        {/* <div className={styles.section}>
          <div className="section-header">
            <h3>🌐 WEBSITES I MADE</h3>
          </div>
          <div id={styles["project-grid"]}>
            <ProjectCard
              image="/static/projects/myfursona.png"
              title="Plainrock124 Website"
              description="My reindition of what his website will look like"
              repoLink="skepfusky/plainrock124-website"
            />
          </div>
        </div>
        <hr /> */}
        {/* <div className={styles.section}>
          <div className="section-header">
            <h3>💜 PROJECTS I'VE CONTRIBUTED</h3>
          </div>
          <div id={styles["project-grid"]}>
            <ProjectCard
              image="/static/projects/myfursona.png"
              title="MyFursona"
              description="An open source project where you an manage your fursona(s)"
              repoLink="MyFursona-Project/MyFursona"
              extLink="https://www.myfursona.art"
            />
            <ProjectCard
              image="/static/projects/myfursona.png"
              title="Fursuit Detector"
              description="This is pretty much self-explanatory"
              repoLink="OpenFurs/fursuit-detector-web"
            />
          </div>
        </div>
        <hr /> */}
        {/* <div className={styles.section}>
          <div className="section-header">
            <h3>🎵 DISCOGRAPHY</h3>
            <Link href="/projects">See moar</Link>
          </div>
        </div>
        <hr /> */}
        {/* <div className={styles.section}>
          <div className="section-header">
            <h3>📝 PROFICENCY</h3>
          </div>
        </div> */}
      </div>
    </ContainerBaseSEO>
  );
}
