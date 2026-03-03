/* eslint-disable max-len */
import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const subscriptionsIcon = ({
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
    class=${`subscriptions-icon ${className ?? ''}`}
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
      d="M17 4.5C17.2761 4.5 17.5 4.72386 17.5 5L17.5 15C17.5 15.2761 17.2761 15.5 17 15.5L4 15.5C3.72386 15.5 3.5 15.2761 3.5 15L3.5 5C3.5 4.72386 3.72386 4.5 4 4.5L17 4.5Z"
      stroke="currentColor"
    />
    <path d="M4 8.5H17" stroke="currentColor" />
    <line x1="13.5" y1="3" x2="13.5" y2="6" stroke="currentColor" />
    <line x1="7.5" y1="3" x2="7.5" y2="6" stroke="currentColor" />
  </svg>
`;
