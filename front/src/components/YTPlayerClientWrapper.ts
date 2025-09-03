import { LitElement, html, render } from "lit";
import { customElement, property } from "lit/decorators.js";

class YouToobSingleton {
  #_debug(...msg: any[]) {
    console.debug("[kuro-yt-client]", `Init process ${this.videoId} =>`, ...msg)
  }

  constructor(protected mountEl: string, protected videoId: string, protected playerEvents: YT.Events) {
    const iframeAPIUrl = "https://www.youtube.com/iframe_api"

    // Check if iframe_api script tag exists before adding it
    // Array length should be zero since the tag would already append the first time
    // to prevent any duplicates *then* it is safe to load the player
    const ytIframeLoaderScripts = Array.from(document.getElementsByTagName("script")).filter((e) => e.src === iframeAPIUrl)
    if (ytIframeLoaderScripts.length >= 1) {
      this.#_debug("iframe script exists")

      if (window.YT) {
        this.#_debug("has script and yt globals, loading player")
        this.loadPlayer()
        return
      }
    } else {
      this.#_debug("No iframe script, inserted script to <head>")
      const iframeTag = Object.assign(document.createElement("script"), {
        src: iframeAPIUrl,
      });

      // Make sure the iframe API gets fetched first
      iframeTag.setAttribute("fetchpriority", "high");

      const firstScriptTag = this.__getFirstTag("script");
      firstScriptTag.parentNode!.insertBefore(iframeTag, firstScriptTag);
    }

    // Listen for DOM mutations
    // So that the player and it's event listeners will be available from any connection speed
    const headTags = new MutationObserver((mutations) => {
      for (const muts of mutations) {
        const addedNodes = Array.from(muts.addedNodes);
        const hasWidgetAPI = addedNodes.some((e) => (e as HTMLScriptElement).id === "www-widgetapi-script");

        if (!hasWidgetAPI) {
          if (window.YT) {
            this.#_debug("No widget API but YT globals are found, loading player")
            this.loadPlayer();
            
            __headTagDisconnect();
          }

          this.#_debug("No widget API found")
          return
        }

        const checkYT = setInterval(() => {
          if (!YT.Player) {
            this.#_debug("No window.YT global object, retrying")
            return
          }

          this.#_debug("Found window.YT global object, loading player")
          clearInterval(checkYT);
          this.loadPlayer();
          __headTagDisconnect();
        }, 100);
      }
    });

    headTags.observe(document.head, { childList: true });

    const __headTagDisconnect = () => {
      // Unmount observer after 2 secs
      const disconnect_observer_delay = 6

      setTimeout(() => {
        this.#_debug(`Disconnected MutObserver after ${disconnect_observer_delay} seconds`);
        headTags.disconnect();
      }, 1e3 * disconnect_observer_delay);
    }
  }

  private __getFirstTag(tag: keyof HTMLElementTagNameMap) {
    return document.getElementsByTagName(tag)[0]
  }

  private loadPlayer() {
    new YT.Player(this.mountEl, {
      host: "https://www.youtube-nocookie.com",
      height: "100%",
      width: "100%",
      videoId: this.videoId,
      // videoId: this.attributes.getNamedItem("video-id")!.nodeValue,
      playerVars: {
        enablejsapi: 1,
        showinfo: 0,
      },
      events: this.playerEvents
    });
  };
}

@customElement("yt-player-client-wrapper")
export class YTPlayerClient extends LitElement {
  @property({ attribute: "video-id", type: String })
  videoId?: string;

  protected createRenderRoot() {
    return this;
  }

  private reflectPlayerState(stateInt: number) {
    const _playerStateMap: { [key: string]: string } = {
      "-1": "UNSTARTED",
      "0": "ENDED",
      "1": "PLAYING",
      "2": "PAUSED",
      "3": "BUFFERING",
      "5": "CUED",
    }

    this.setAttribute("_player-state", _playerStateMap[stateInt.toString() as keyof typeof _playerStateMap])
  }

  connectedCallback() {
    if (!this.videoId) {
      throw new ReferenceError("video-id property is missing")
    }

    // Creates an element anchor for the client-side iframe to latch into
    // Randomize id so it replicates its own player state
    const uid = `__player_${crypto.randomUUID()}`

    render(html`<span id="${uid}"></span>`, this)


    new YouToobSingleton(uid, this.videoId, {
      onReady: (e) => {
        Object.assign(this, { ytEvents: e.target })
        this.setAttribute("is-ready", "")

        const playerState = e.target.getPlayerState()
        console.debug("[yt iframe] Mounted id", this.videoId, "at state", playerState)

        this.reflectPlayerState(playerState)
      },
      onStateChange: (e) => {
        this.reflectPlayerState(e.data)
      },
      onError: (e) => {
        console.error("YT Client error:", e)
      }
    })
  }
}
