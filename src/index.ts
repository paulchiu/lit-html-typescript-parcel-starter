import 'tachyons'
import { render } from 'lit-html'
import { largeTitleLink, LargeTitleLinkList } from './components/large-title-link-list'

const titleLinkList = new LargeTitleLinkList(
  'Lit-Html Typescript Parcel Starter Demo',
  '#',
  [
    largeTitleLink('Home', '/'),
    largeTitleLink('About', '/about', true),
  ]
)

// console.log(titleLinkList.render());
render(titleLinkList.render(), document.querySelector('#app'));
