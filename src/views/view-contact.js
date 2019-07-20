import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewContact extends PageViewElement{

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <div>
      <h1>Contáctanos</h1>
      <p>  Ut enim ad minim veniam, quis nostrud exercitation ullamco 
      laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div
    `;
  }
}

customElements.define('view-contact', ViewContact);