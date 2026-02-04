// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const flag06Icon = ({
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
    class=${`flag-06-icon ${className ?? ''}`}
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
      d="M4 21V4m0 9h7.4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C13 12.24 13 11.96 13 11.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C12.24 3 11.96 3 11.4 3H5.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C4 3.76 4 4.04 4 4.6V13Zm9-8h6.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 5.76 21 6.04 21 6.6v6.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C20.24 15 19.96 15 19.4 15h-4.8c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C13 14.24 13 13.96 13 13.4V5Z"
    />
  </svg>
`;
