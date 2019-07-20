import { LitElement, html, css } from 'lit-element';
import {PageViewElement} from './page-view-element';

class ViewAbout  extends PageViewElement {

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
    <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. 
    </p>
    <img src="https://picsum.photos/300/200"/>
    </p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
    </div>
    `;
  }
}

customElements.define('view-about', ViewAbout);