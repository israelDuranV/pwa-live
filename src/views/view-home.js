import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';
class ViewHome  extends PageViewElement {

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
        <h2>Home</h2>
        <input type="text"/>
    </div>
    `;
  }
}

customElements.define('view-home', ViewHome);