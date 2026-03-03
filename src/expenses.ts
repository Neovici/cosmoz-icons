import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const expensesIcon = ({
  slot,
  title,
  className,
  width = '20',
  height = '20',
  styles,
}: {
  slot?: string;
  title?: string;
  className?: string;
  width?: string;
  height?: string;
  styles?: string;
} = {}) => html`
  <svg
    slot=${ifDefined(slot)}
    class=${`expenses-icon ${className ?? ''}`}
    viewBox="0 0 20 20"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${width}
    height=${height}
    fill="none"
    style=${ifDefined(styles)}
  >
    ${when(title, () => svg`<title>${title}</title>`)}
    <path
      d="M4.5 2.5L16.5 2.5L16.5 17.5L14.5 15.5L12.5 17.5L10.5 15.5L8.5 17.5L6.5 15.5L4.5 17.5L4.5 2.5Z"
      stroke="currentColor"
      stroke-linejoin="round"
    />
    <path d="M6 6.5H15" stroke="currentColor" />
    <path d="M6 9.5H12" stroke="currentColor" />
    <path d="M13 9.5H15" stroke="currentColor" />
    <path d="M6 12.5H12" stroke="currentColor" />
    <path d="M13 12.5H15" stroke="currentColor" />
  </svg>
`;
