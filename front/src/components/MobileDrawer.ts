import { html, css, LitElement } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("mobile-drawer")
export class MobileDrawer extends LitElement {
  @property({ type: String, attribute: "transition-direction" })
  direction = "left"

  @property({ type: Boolean, attribute: "open" })
  isOpen = false

  // No need to create a shadow DOM simply for sliding stuff
  protected createRenderRoot() {
    return this
  }

  override connectedCallback() {
    this.setAttribute("aria-expanded", String(this.isOpen))

    // this.style.position = "relative" 
    // this.style.left = "50px" 
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mobile-drawer": MobileDrawer
  }
}