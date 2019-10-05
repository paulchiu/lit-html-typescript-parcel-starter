import 'tachyons'
import page from 'page'
import { render, html } from 'lit-html'
import { largeTitleLink, largeTitleLinkList } from './components/large-title-link-list'
import { layout } from './components/layout'

const appContainer = document.querySelector('#app')
const menu = largeTitleLinkList(
  'Lit-Html Typescript Parcel Starter Demo',
  '#',
  [
    largeTitleLink('Home', '/'),
    largeTitleLink('About', '/about', true),
  ]
)

page('/', () => {
  const body = html`<div>bar</div>`
  render(layout(menu, body), appContainer);
})
page('/about', () => {
  const body = html`<div>baz</div>`
  render(layout(menu, body), appContainer);
})
page()
