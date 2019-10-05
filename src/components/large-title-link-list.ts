import { html, TemplateResult } from 'lit-html'

/**
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
 * @link https://tachyons.io/components/nav/large-title-link-list/index.html
 */
export function largeTitleLinkList(
  label: string,
  href: string,
  list: TemplateResult[],
  title?: string
): TemplateResult {
  return html`<nav class="pa3 pa4-ns">
      <a
        class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns"
        href="${href}"
        title="${title}"
      >
        ${label}
      </a>
      <div class="tc pb3">
        ${list}
      </div>
    </nav>`
}
