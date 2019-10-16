import { LitElement, html, css } from 'lit-element';
import { installRouter } from 'pwa-helpers/router.js';

import './views/view-about';
import './views/view-home';
import './views/view-contact';
import 'dile-tabs/dile-tabs';
import 'dile-pages/dile-pages';

class PwaLive extends LitElement {
    static get styles() {
        return css `
			:host{
				display:block;
				padding: 15px;
				--dile-tab-background-color: transparent;
				--dile-tab-selected-background-color: transparent;
				--dile-tab-selected-text-color: #1020c0;
			}
			h1{
				font-weight: 300px;
			}
		`;
    }
    static get properties() {
        return {
            page: { type: String },
            active: { type: Boolean }
        };
    }
    constructor() {
        super();
        this.page = 'home';
        installRouter((location) => this.handleNavigation(location.pathname));
    }
    render() {
        return html `
			<h1>my app</h1>
            <nav>
            
			<dile-tabs selected="${this.page}" attrForSelected="name" @dile-tabs-selected-changed="${this.selectedChanged}">
				<dile-tab name="home">Home</dile-tab>
				<dile-tab name="about">About</dile-tab>
				<dile-tab name="contact">Contact</dile-tab>
			</dile-tabs>
			<dile-pages selected="${this.page}" attrForSelected="name">
				<view-home name="home" ?active=${this.page == 'home'}></view-home>
				<view-about name="about" ?active=${this.page =='about'}></view-about>
				<view-contact name="contact" ?active=${this.page =='contact'}></view-contact>
			</dile-pages>
            </nav>
            <button @click="${this.navigate}">Navegar a contact</button>
		`;
    }
    selectedChanged(e) {
        this.page = e.detail;
    }
    handleNavigation(location) {
        if (location == '/') {
            this.page = "home";
        } else {
            this.page = location.slice(1);
        }
    }
    navigate() {
        window.history.pushState({}, '', '/contact');
        this.handleNavigation(window.location);
    }
}

customElements.define('pwa-live', PwaLive);