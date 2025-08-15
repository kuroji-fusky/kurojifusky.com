import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";


@customElement("kuro-internal-media-player")
export class _KuroInternalPlayer extends LitElement {
  static styles = css`
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-width: 0;
  }
  `

  render() {
    return html`
    <div>
      
    </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kuro-internal-media-player": _KuroInternalPlayer;
  }
}
