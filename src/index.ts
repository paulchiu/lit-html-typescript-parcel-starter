import 'tachyons'
import page from 'page'
import { render } from 'lit-html'
import { largeTitleLink, largeTitleLinkList } from './components/large-title-link-list'
import { article } from './components/article'
import { layout } from './components/layout'

const appContainer = document.querySelector('#app')
const menu = largeTitleLinkList(
  'Lit-Html Typescript Parcel Starter Demo',
  '#',
  [
    largeTitleLink('Home', '/'),
    largeTitleLink('About', '/about'),
    largeTitleLink('GitHub', 'https://github.com/paulchiu/lit-html-typescript-parcel-starter', true),
  ]
)

page('/', async () => {
  const { HomeArticle } = await import ('./data/articles')
  render(layout(menu, article(HomeArticle)), appContainer);
})
page('/about', async () => {
  const { AboutArticle } = await import ('./data/articles')
  render(layout(menu, article(AboutArticle)), appContainer);
})
page()
