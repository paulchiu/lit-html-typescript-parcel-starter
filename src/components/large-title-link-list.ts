import { html } from 'lit-html'

/**
 * @link https://tachyons.io/components/nav/large-title-link-list/index.html
 */
export class LargeTitleLink {
  constructor(
    protected label: string,
    protected href: string,
    public isLast: boolean = false,
    protected title?: string
  ) {
  }

  render() {
    const el = html`<a class="link dim gray f6 f5-ns dib mr3" href="${this.href}">${this.label}</a>`

    if (this.title) {
      el.getTemplateElement().title = this.title
    }

    if (this.isLast) {
      el.getTemplateElement().classList.remove('mr3')
    }

    return el
  }
}

/**
 * @link https://tachyons.io/components/nav/large-title-link-list/index.html
 */
export class LargeTitleLinkList {
  constructor(
    protected label: string,
    protected href: string,
    protected list: LargeTitleLink[],
    protected title?: string
  ) {
  }

  render() {
    const titleLink = html`<a
        class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns"
        href="${this.href}"
        ${this.title ? `title="${this.title}` : ''}
      >
        ${this.label}
      </a>`

    return html`<nav class="pa3 pa4-ns">
        ${titleLink}
        <div class="tc pb3">
          ${this.list.map(l => l.render())}
        </div>
      </nav>`
  }
}
