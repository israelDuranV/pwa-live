import { LitElement, html, css } from 'lit-element';
import './views/view-about';
import './views/view-home';
import './views/view-contact';
import 'dile-tabs/dile-tabs';
import 'dile-pages/dile-pages';
class PwaLive extends LitElement {
	static get styles(){
		return css`
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
			selected: { type: String },
			active: {type: Boolean}
		};
	}
    constructor(){
		super();
		this.selected = 'home';
	}
	render() {
		return html`
			<h1>my app</h1>
			<!--
			<nav>

				<a href="#" @click="${this.go}" name="home">Home</a> |
				<a href="#" @click="${this.go}" name="about">About</a> |
				<a href="#" @click="${this.go}" name="contact">Contact</a>
			
			</nav>
			-->
			<dile-tabs selected="${this.selected}" attrForSelected="name" @dile-tabs-selected-changed="${this.selectedChanged}">
				<dile-tab name="home">Home</dile-tab>
				<dile-tab name="about">About</dile-tab>
				<dile-tab name="contact">Contact</dile-tab>
			</dile-tabs>
			<dile-pages selected="${this.selected}" attrForSelected="name">
				<view-home name="home" ?active=${this.selected == 'home'}></view-home>
				<view-about name="about" ?active=${this.selected =='about'}></view-about>
				<view-contact name="contact" ?active=${this.selected =='contact'}></view-contact>
			</dile-pages>
		`;
	}
	selectedChanged(e){
		this.selected = e.detail;
	}
	go(e){
		e.preventDefault();
		let page = e.target.getAttribute("name");
		this.selected = page;
		console.log(this.selected);

	}
}

customElements.define('pwa-live', PwaLive);
