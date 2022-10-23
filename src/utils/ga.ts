declare global {
	interface Window {
		gtag: any
	}
}

export const pageView = (url: string): void => {
	if (typeof window.gtag !== "undefined") {
		window.gtag("config", process.env.GA, {
			page_path: url
		})
	}
}

type GTagEvent = {
	action: string
	params: any
}

export const event = ({ action, params }: GTagEvent): void => {
	window.gtag("event", action, params)
}
