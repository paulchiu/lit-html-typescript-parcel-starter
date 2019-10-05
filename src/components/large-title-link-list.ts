import { html, TemplateResult } from 'lit-html'

/**
 * This is a functional component.
 *
 * @link https://tachyons.io/components/nav/large-title-link-list/index.html
 */
export function largeTitleLink(
    label: string,
    href: string,
    isLast: boolean = false,
    title?: string
): TemplateResult {
  return html`<a
      class="link dim gray f6 f5-ns dib ${isLast ? '' : 'mr3'}"
      href="${href}"
      title="${title}"
    >
      ${label}
    </a>`
}

/**
 * This is a class component.
 *
 * @link https://tachyons.io/components/nav/large-title-link-list/index.html
 */
export class LargeTitleLinkList {
  constructor(
    protected label: string,
    protected href: string,
    protected list: TemplateResult[],
    protected title?: string
  ) {
  }

  render() {
    const titleLink = html`<a
        class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns"
        href="${this.href}"
        title="${this.title}"
      >
        ${this.label}
      </a>`

    return html`<nav class="pa3 pa4-ns">
        ${titleLink}
        <div class="tc pb3">
          ${this.list}
        </div>
      </nav>`
  }
}
