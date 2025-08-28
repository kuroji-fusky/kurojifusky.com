import { html, LitElement } from "lit"
import { customElement } from "lit/decorators.js"

@customElement("artwork-modal")
export class ArtworkModal extends LitElement {
  protected render() {
    return html`
      <!-- todo: Tailwind classes are not supported in shadow-root -->
      <div class="fixed inset-0 hidden">
        <slot name="artwork-items"></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "artwork-modal": ArtworkModal
  }
}