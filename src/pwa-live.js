import { LitElement, html, css } from 'lit-element';
import './views/view-about';
import './views/view-home';
import './views/view-contact';
class PwaLive extends LitElement {
	static get styles(){
		return css`
			:host{
				display:block;
				padding: 15px;
			}
			h1{
				font-weight: 300px;
			}
			.page{
				display: none;
			}
			.page[active]{
				display: block;
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
			<nav>
				<a href="#" @click="${this.go}" name="home">Home</a> |
				<a href="#" @click="${this.go}" name="about">About</a> |
				<a href="#" @click="${this.go}" name="contact">Contact</a>
			</nav>
			<main>
			<view-home class="page" ?active=${this.selected == 'home'}></view-home>
			<view-about class="page" ?active=${this.selected =='about'}></view-about>
			<view-contact class="page" ?active=${this.selected =='contact'}></view-contact>
			</main>
		`;
	}
	go(e){
		e.preventDefault();
		let page = e.target.getAttribute("name");
		this.selected = page;
		console.log(this.selected);

	}
}

customElements.define('pwa-live', PwaLive);
