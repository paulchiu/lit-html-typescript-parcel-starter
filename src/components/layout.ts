import { html, TemplateResult } from 'lit-html'

export function layout(
  header: TemplateResult,
  body: TemplateResult
) {
  return html`
    <div>
      <div>${header}</div>
      <div>${body}</div>
    </div>
  `
}
