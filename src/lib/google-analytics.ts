declare global {
  interface Window {
    gtag: any
  }
}

export const pageView = (url: any) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", process.env.GA, {
      page_path: url
    })
  }
}

export const event = ({ action, params }: IEventProps) => {
  window.gtag("event", action, params)
}
