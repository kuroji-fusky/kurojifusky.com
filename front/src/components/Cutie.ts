import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

type AssistantState = "idle" | "yapping" | "looking-at-cursor" | "grin-at-you"

@customElement("kuro-cutie-assistant")
export class KuroAssistant extends LitElement {
  @property({ type: Number, attribute: "yap-level" })
  yappingLevel = 1

  @state()
  private _assistantState: AssistantState = "idle"

  render() {
    return html`
      <slot name="options"></slot>
      <div id="dialog-box"></div>
      <canvas></canvas>
      <div id="canvas-fallback"></div>
    `
  }

  static styles = css`
  :host {
    box-sizing: border-box;
  }`
}

declare global {
  interface HTMLElementTagNameMap {
    "kuro-cutie-assistant": KuroAssistant
  }
}