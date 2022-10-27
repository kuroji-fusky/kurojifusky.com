import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps
} from "next/document"
import Script from "next/script"

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
					<link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
					<Script
						id="penis"
						strategy="lazyOnload">{`
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.GA}', { 
                page_path: window.location.pathname,
            });
        `}
					</Script>

					<Script
						strategy="lazyOnload"
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA}`}
					></Script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
