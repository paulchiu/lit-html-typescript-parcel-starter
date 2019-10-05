import 'tachyons'
import { html, render } from 'lit-html'

const myTemplate = (name) => html`<p>Hello ${name}</p>`;
render(myTemplate('World'), document.querySelector('#app'));