import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const overviewIcon = ({
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
    class=${`overview-icon ${className ?? ''}`}
    viewBox="0 0 20 20"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${width}
    height=${height}
    fill="none"
    style=${ifDefined(styles)}
  >
    ${when(title, () => svg`<title>${title}</title>`)}
    <path d="M4.5 4.5L16.5 4.5V14.5H4.5L4.5 4.5Z" stroke="currentColor" />
    <path d="M13.5 7L13.5 13" stroke="currentColor" />
    <path d="M10.5 8L10.5 13" stroke="currentColor" />
    <path d="M11.5 14L11.5 17" stroke="currentColor" />
    <path d="M9.5 14L9.5 17" stroke="currentColor" />
    <path d="M14 16.5L7 16.5" stroke="currentColor" />
    <path d="M7.5 10L7.5 13" stroke="currentColor" />
  </svg>
`;
