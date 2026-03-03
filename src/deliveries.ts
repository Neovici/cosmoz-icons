import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const deliveriesIcon = ({
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
    class=${`deliveries-icon ${className ?? ''}`}
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
      d="M3.5 5C3.5 4.72386 3.72386 4.5 4 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V15C16.5 15.2761 16.2761 15.5 16 15.5H4C3.72386 15.5 3.5 15.2761 3.5 15V5Z"
      stroke="currentColor"
    />
    <path
      d="M7.5 4.5V8.5L10 7L12.5 8.5V4.5"
      stroke="currentColor"
      stroke-linejoin="round"
    />
    <line x1="5" y1="13.5" x2="8" y2="13.5" stroke="currentColor" />
  </svg>
`;
