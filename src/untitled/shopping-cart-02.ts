// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const shoppingCart02Icon = ({
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
    class=${`shopping-cart-02-icon ${className ?? ''}`}
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
      d="M6.5 17h10.83c.95 0 1.424 0 1.811-.172a2 2 0 0 0 .844-.703c.238-.35.323-.818.493-1.753l1.35-7.429c.06-.324.089-.486.043-.612a.5.5 0 0 0-.22-.264C21.536 6 21.372 6 21.042 6H5.001M2 2h1.316c.243 0 .364 0 .463.044a.5.5 0 0 1 .212.182c.059.09.078.21.116.45l2.786 17.649c.038.24.057.36.116.45a.5.5 0 0 0 .212.18c.099.045.22.045.463.045H19"
    />
  </svg>
`;
