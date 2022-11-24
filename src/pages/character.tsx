import { Container } from "@/components/Base"
import LazyImg from "@/components/LazyImg"
import { LinkUnderline } from "@/components/Links"
import Notice from "@/components/Notice"
import { cloudinary } from "@/utils/ImgProviders"

export default function Character() {
  const t = "Character"
  const d = "I'm not cute"

  const fursonaColors = [
    { name: "Brown lol", bgHex: "6d390d", fgHex: "ffe9d7" },
    { name: "Vibrant Orchid", bgHex: "BB3EED", fgHex: "F9ECFE" },
    { name: "Royal Blue", bgHex: "2076C5", fgHex: "E4F0FB" },
    { name: "Sky Cyan", bgHex: "48DDF7", fgHex: "023741" },
    { name: "Bright Yellow", bgHex: "F8D817", fgHex: "372F01" },
    { name: "Pale Orange", bgHex: "FCE392", fgHex: "3C2701" },
    {
      name: "Sclera",
      subtitle: "(white eye part)",
      bgHex: "f3edcd",
      fgHex: "21201c"
    }
  ]

  return (
    <Container title={t} description={d} wrap className="mt-20">
      <Notice
        type="warning"
        content="This page isn't complete and is subject to change. I might be lazy to add or update something in this page lol"
      />
      <section className="flex flex-col items-center gap-y-5 my-10">
        <div
          className="
				relative
				2xl:h-[25rem] 2xl:w-[58.5rem]
				lg:h-[21rem] lg:w-[49.5rem]
				md:h-[18rem] md:w-[40.5rem]
				sm:h-[13.5rem] sm:w-[30rem]
				h-[10.5rem] w-[25rem]
				"
        >
          <LazyImg
            src={cloudinary({
              rootDir: "fursonas",
              dir: "ref-sheets",
              fileName: "ffa-6th-revision_rrvewu.png"
            })}
            className="overflow-hidden rounded-lg"
          />
        </div>
        <span className="text-gray-400">
          {"Ref sheet by "}
          <LinkUnderline
            external
            link="https://www.furaffinity.net/view/32456028/"
            name="KuteKittyKat"
          />
        </span>
      </section>
      <section className="flex flex-col gap-y-2">
        <div className="font-inter flex flex-col lg:flex-row mx-0 lg:mx-auto max-w-[1280px] rounded-lg overflow-x-hidden">
          {fursonaColors.map((color, i) => (
            <div
              key={i}
              className="p-3 h-[7rem] w-[100%] flex flex-col"
              style={{
                backgroundColor: `#${color.bgHex}`,
                color: `#${color.fgHex}`
              }}
            >
              <strong className="text-2xl">{color.name}</strong>
              {color.subtitle ? (
                <span className="text-sm">{color.subtitle}</span>
              ) : null}
              <span>#{color.bgHex.toLowerCase()}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-screen-lg">
        <article className="flex flex-col gap-y-3 my-3 leading-7 text-base lg:leading-8 lg:text-lg">
          <p>
            <strong>Kuroji</strong> is a blue and yellow fox-husky hybrid or
            fusky; and was originally a husky. Wearing thick black glasses and a
            purple t-shirt with white outlines, and completely pantless! (lmao)
          </p>
          <p>
            Mixing with a typical traits both of a fox and a husky, he's a
            wholesome, outgoing, yet weird personality and he easily gets soft
            when he's immediately flattered and starts blushing intensely (lol)
          </p>
          <h3 className="text-2xl lg:text-3xl">Why a husky? Why a fox?</h3>
          <p>
            My fursona was initially a husky until when I'm talking to a friend
            of mine talking about the usual furry stuff and immediately had an
            idea to become a fox-husky hybrid; since I equally had a fascination
            with both foxes and huskies with both their traits after looking at
            some interesting facts online.
          </p>
          <p>
            During my childhood, I grew up watching various shows and movies
            I've grown up, most notably <em>The Fox And The Hound 2</em>, the
            <em>Balto</em> trilogy, <em>Bolt</em>, <em>101 Dalmatians</em>, and
            others. (Most of them are Disney movies; unrelated, but I used to
            watch a lot of <em>Care Bears</em> if you're that old lol) But I
            think that Bolt and Balto are what influenced it, well sort of...
            mainly since I like its pure appearance, courageous, and charismatic
            qualities are what makes me like them the most initially. Including
            foxes as well!
          </p>
        </article>
      </section>
    </Container>
  )
}
