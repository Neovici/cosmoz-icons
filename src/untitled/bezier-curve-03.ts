// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const bezierCurve03Icon = ({
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
    class=${`bezier-curve-03-icon ${className ?? ''}`}
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
      d="M10.857 7 5.143 17M6 19h12m.857-2L13.143 7M3.6 21h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C6 20.24 6 19.96 6 19.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C5.24 17 4.96 17 4.4 17h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2 17.76 2 18.04 2 18.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C2.76 21 3.04 21 3.6 21Zm16 0h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C22 20.24 22 19.96 22 19.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C21.24 17 20.96 17 20.4 17h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C18 17.76 18 18.04 18 18.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C18.76 21 19.04 21 19.6 21Zm-8-14h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C14 6.24 14 5.96 14 5.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C13.24 3 12.96 3 12.4 3h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C10 3.76 10 4.04 10 4.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C10.76 7 11.04 7 11.6 7Z"
    />
  </svg>
`;
