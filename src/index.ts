import 'tachyons'
import { render } from 'lit-html'
import { LargeTitleLink, LargeTitleLinkList } from './components/large-title-link-list'

const titleLinkList = new LargeTitleLinkList(
  'Lit-Html Typescript Parcel Starter Demo',
  '#',
  [
    new LargeTitleLink('Home', '#'),
    new LargeTitleLink('About', '/about', true),
  ]
)

// console.log(titleLinkList.render());
render((new LargeTitleLink('Home', '#')).render(), document.querySelector('#app'));
