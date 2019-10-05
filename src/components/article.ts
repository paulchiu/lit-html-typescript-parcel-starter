import { html, TemplateResult } from 'lit-html'

export interface ArticleContent {
  title: string
  subtitle?: string
  date?: string
  body: string
}

/**
 * @link https://tachyons.io/components/articles/left-title-top-border/index.html
 */
function articleParagraph(
  text: string,
  isFirst: boolean = false
): TemplateResult {
  const noTopMargin = isFirst
    ? 'mt0-ns'
    : ''

  return html`<p class="f5 lh-copy measure ${noTopMargin}">${text}</p>`
}

/**
 * @link https://tachyons.io/components/articles/left-title-top-border/index.html
 */
export function article(content: ArticleContent): TemplateResult {
  return html`<article class="cf ph3 ph5-ns pv5">
      <header class="fn fl-ns w-50-ns pr4-ns">
        <h1 class="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">${content.title}</h1>
        ${content.subtitle
          ? html`<h2 class="f3 mid-gray lh-title">${content.subtitle}</h2>`
          : ''
        }
        ${content.date
          ? html`<time class="f6 ttu tracked gray">${content.date}</time>`
          : ''
        }
      </header>
      <div class="fn fl-ns w-50-ns">
        ${content.body.split('\n').map((p, i) => articleParagraph(p, i === 0))}
      </div>
    </article>`
}
