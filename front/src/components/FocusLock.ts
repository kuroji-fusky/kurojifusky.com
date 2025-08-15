import { css, html, LitElement } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("focus-lock-region")
export class FocusLock extends LitElement {
  @property({ type: Boolean, attribute: "has-lock-focus" })
  haslockFocus?: boolean

  // static properties = {
  //   hasLockFocus: {
  //     type: Boolean
  //   }
  // }

  static styles = css`
    #focus-lock-region {
      position: absolute;
      top: 0;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      overflow: hidden;
      white-space: nowrap;
      width: 1px;
      height: 1px;
    }
  `

  protected render() {
    return html`
      <button id="focus-lock-region"></button>
      <slot></slot>
      <button id="focus-lock-region"></button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "focus-lock-region": FocusLock
  }
}