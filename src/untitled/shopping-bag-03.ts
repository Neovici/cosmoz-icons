// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const shoppingBag03Icon = ({
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
    class=${`shopping-bag-03-icon ${className ?? ''}`}
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
      d="M16 8a4 4 0 1 1-8 0m-4.367-.599-.7 8.4c-.15 1.805-.226 2.707.08 3.403a3 3 0 0 0 1.319 1.434C5 21 5.905 21 7.716 21h8.567c1.81 0 2.716 0 3.384-.362a3 3 0 0 0 1.32-1.434c.305-.696.23-1.598.08-3.403l-.7-8.4c-.13-1.552-.195-2.329-.539-2.916a3 3 0 0 0-1.294-1.191C17.92 3 17.141 3 15.583 3H8.416c-1.558 0-2.337 0-2.95.294a3 3 0 0 0-1.295 1.19c-.344.588-.409 1.365-.538 2.917Z"
    />
  </svg>
`;
