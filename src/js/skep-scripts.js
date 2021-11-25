// Custom HTML elements so I don't rip my hair off jesus
// HEADER
const hTemp = document.createElement('template');
hTemp.innerHTML = `
  <link rel="stylesheet" href="components.css">
  <header>
  </header>
`;
class skepHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // const fA = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    // Conditionally load FA to the component
    // if (fA) {
      // shadowRoot.appendChild(fA.cloneNode());
    // }
// 
    shadowRoot.appendChild(hTemp.content);
  }
}
customElements.define('skep-header', skepHeader);

// FOOTER
const fTemp = document.createElement('template');
fTemp.innerHTML = `
  <link rel="stylesheet" href="components.css">
  <footer>
  </footer>
`;
class skepFooter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const fA = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    // Conditionally load FA to the component
    if (fA) {
      shadowRoot.appendChild(fA.cloneNode());
    }
    shadowRoot.appendChild(fTemp.content);
  }
}
customElements.define('skep-header', skepFooter);