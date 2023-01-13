import { FooterLinks } from "@/constants/NavLinks"
import { faChevronRight, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Anchor, Button } from "../ui"
import style from "./Footer.module.scss"

export default function Footer() {
  return (
    <footer id={style["root"]}>
      <div id={style["grid-wrapper"]}>
        <BrandingColumn />
        <NavListsColumn />
        <BlobDecorator />
      </div>
    </footer>
  )
}

function BrandingColumn() {
  return (
    <div className={style["branding-col"]}>
      <div className="flex flex-col items-start gap-y-2">
        <h1 className={style["branding-wordmark"]}>Kuroji Fusky</h1>
        <Button>Contact Meh</Button>
        <div
          style={{
            fontSize: "max(calc(2.75rem * 0.27), calc(0.25rem + 2.25vw * 0.29))"
          }}
          className="font-inter"
        >
          <div>
            Built with
            <FontAwesomeIcon
              className="px-1.5 text-sona-borahaealt-400"
              icon={faHeart}
            />
            using Next.js, Tailwind CSS, and GSAP
          </div>
        </div>
      </div>

      <div
        style={{
          fontSize: "max(calc(2.75rem * 0.27), calc(0.25rem + 2.25vw * 0.29))"
        }}
      >
        <div id="copyright">
          {`© ${new Date().getFullYear()} Kerby Keith Aquino -
          making dumb yet cool things since 2014`}
        </div>
        <Anchor to="https://github.com/kuroji-fusky/kurofusky.xyz" external>
          View this website's source code
          <FontAwesomeIcon className="pl-2" size="sm" icon={faChevronRight} />
        </Anchor>
      </div>
    </div>
  )
}

function NavListsColumn() {
  return (
    <>
      {FooterLinks.map((root, index) => (
        <div key={index} className={style["links-col"]}>
          <h2>{root.heading}</h2>
          <ul className={style["link-container-flex"]}>
            {root.links.map((item, index) => (
              <li key={index}>
                <Anchor to={item.link} className={style["align-icons-center"]}>
                  {item.icon && <FontAwesomeIcon icon={item.icon} fixedWidth />}
                  {item.text}
                </Anchor>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

function BlobDecorator() {
  return <div id={style["blob-decorator"]} aria-hidden />
}
