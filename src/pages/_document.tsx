import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWarning
} from "@fortawesome/free-solid-svg-icons"
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from "next/document"
import Link from "next/link"

export default class _ extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="./favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          />
        </Head>
        <body>
          <div className="fixed lg:flex-row flex-col  bottom-0 left-0 right-0 w-full z-[42069] bg-red-900 backdrop-blur-sm bg-opacity-75 px-4 py-2.5 flex gap-3 items-center justify-center">
            <FontAwesomeIcon icon={faWarning} size="lg" />
            <span>
              This site is a total mess right now and is now currently being
              updated soon with more flashy visuals and more content!
            </span>
            <Link href="https://v7.kurojifusky.com/" className="text-red-200 hover:underline">
              View new website (it's still broken lol)
            </Link>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
