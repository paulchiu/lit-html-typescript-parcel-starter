import 'tachyons'
import page from 'page'
import { render, html } from 'lit-html'
import { largeTitleLink, LargeTitleLinkList } from './components/large-title-link-list'
import { layout } from './components/layout'

const titleLinkList = new LargeTitleLinkList(
  'Lit-Html Typescript Parcel Starter Demo',
  '#',
  [
    largeTitleLink('Home', '/'),
    largeTitleLink('About', '/about', true),
  ]
)
let body = html`<div>foo</div>`
const appLayout = layout(titleLinkList.render(), body)
const appContainer = document.querySelector('#app')
render(appLayout, appContainer);

page('/', () => {
  body = html`<div>bar</div>`
  render(layout(titleLinkList.render(), body), appContainer);
})
page('/about', () => {
  body = html`<div>baz</div>`
  render(layout(titleLinkList.render(), body), appContainer);
})
page()
