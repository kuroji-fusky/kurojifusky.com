import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("yt-player-client-wrapper")
export class YTPlayerClient extends LitElement {
  protected createRenderRoot() {
    return this;
  }

  private loadPlayer() {
    new YT.Player("_player", {
      host: "https://www.youtube-nocookie.com",
      height: "100%",
      width: "100%",
      videoId: this.attributes.getNamedItem("video-id")!.nodeValue,
      playerVars: {
        rel: 0,
        enablejsapi: 1,
        modestbranding: 0,
        showinfo: 0,
      },
      events: {
        onReady: (e) => {
          console.log("Player mounted", e.target);
        },
      },
    });
  };

  connectedCallback() {
    // Creates an element anchor for the client-side iframe to latch into
    const playerAnchor = Object.assign(document.createElement("div"), {
      id: "_player",
    });

    this.append(playerAnchor);

    setTimeout(() => {
      if (window.YT) return this.loadPlayer();

      // Listen for DOM mutations
      // So that the player and it's event listeners will be available from any connection speed
      const headTags = new MutationObserver((mutations) => {
        for (const muts of mutations) {
          const addedNodes = Array.from(muts.addedNodes);

          const hasWidgetAPI = addedNodes.some(
            (e) => (e as HTMLScriptElement).id === "www-widgetapi-script",
          );

          if (hasWidgetAPI) {
            const checkYT = setInterval(() => {
              if (window.YT && YT.Player) {
                clearInterval(checkYT);
                this.loadPlayer();
              }
            }, 100);
          }
        }
      });

      headTags.observe(document.head, { childList: true });

      const iframeAPIUrl = "https://www.youtube.com/iframe_api"
      // Check if iframe_api script tag exists before adding it
      const ytIframeLoaderScripts = Array.from(document.getElementsByTagName("script")).filter((e) => e.src === iframeAPIUrl)

      // Array length should be zero since the tag would already append the first time to prevent any duplicates
      if (ytIframeLoaderScripts.length >= 1) return

      // Mount the YouTube JSAPI stuff
      const iframeTag = Object.assign(document.createElement("script"), {
        src: iframeAPIUrl,
      });

      // Make sure the iframe API gets fetched first
      iframeTag.setAttribute("fetchpriority", "high");

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode!.insertBefore(iframeTag, firstScriptTag);

      const loadedIframe = this.getElementsByTagName("iframe")[0];
      loadedIframe.style.display = "none";

      // Unmount observer after 10 secs
      setTimeout(() => {
        console.debug("Disconnected MutObserver");
        headTags.disconnect();

        // Remove the first iframe that is most likely server rendered or statically generated
        loadedIframe.remove();
      }, 1e3 * 10);
      return;
    }, 50);
  }
}