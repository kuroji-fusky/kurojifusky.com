// Custom HTML elements so I don't rip my hair off jesus
// HEADER
const hTemp = document.createElement('template');
hTemp.innerHTML = `
  <style>
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");
    header {
      position: fixed;
      top: 0;
      left: 0;
      color: darkblue;
    }
  </style>
  <header>
    BTS
  </header>
`;
class skepHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(hTemp.content);
  }
}
customElements.define('skep-header', skepHeader);

// FOOTER
const fTemp = document.createElement('template');
fTemp.innerHTML = `
  <style>
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");
  </style>
  <footer>
    I WILL SURVIVE
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
customElements.define('skep-footer', skepFooter);