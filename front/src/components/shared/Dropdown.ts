// Copied for testing purposes
import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("kuro-ui-dropdown")
export class KuroDropdown extends LitElement {
  @property({ type: String, attribute: "anchor-position" })
  anchorPosition = "top left"

  @state()
  private isOpen = false

  render() {
    return html`
      <div part="dd-container">
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "kuro-ui-dropdown": KuroDropdown
  }
}