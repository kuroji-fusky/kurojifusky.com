import twStyles from "../styles/global.css?inline"
import { LitElement, html, unsafeCSS, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("yt-timestamp-marker")
export class YTTimestampMarker extends LitElement {
  static styles = [
    unsafeCSS(twStyles),
    css`
      :host {
        display: contents;
        font: inherit;
      }
    `
  ]

  @property({ type: Number })
  duration: number = 0

  @property({ attribute: "target-id", type: String })
  targetVideoId!: string;

  @property({ attribute: "focus-on-play", type: Boolean })
  focusOnPlay: boolean = false

  connectedCallback() {
    super.connectedCallback()
  }

  protected render() {
    return html`
      <button part="cue-marker" class="inline-block leading-none cursor-pointer py-1 px-1.5 rounded-md bg-kuro-lavender-700/40 hover:bg-kuro-lavender-700/60 hover:underline">
        <slot></slot>
      </button>
    `
  }
}