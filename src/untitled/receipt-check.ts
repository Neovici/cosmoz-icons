// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const receiptCheckIcon = ({
  slot,
  title,
  className,
  width = '24',
  height = '24',
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
    class=${`receipt-check-icon ${className ?? ''}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${width}
    height=${height}
    style=${ifDefined(styles)}
  >
    ${when(title, () => svg`<title>${title}</title>`)}
    <path
      d="m9 10.5 2 2L15.5 8M20 21V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 3 16.88 3 15.2 3H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 5.28 4 6.12 4 7.8V21l2.75-2 2.5 2L12 19l2.75 2 2.5-2L20 21Z"
    />
  </svg>
`;
