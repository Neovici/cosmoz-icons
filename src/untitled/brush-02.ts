// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const brush02Icon = ({
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
    class=${`brush-02-icon ${className ?? ''}`}
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
      d="M18 10V3.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C17.24 2 16.96 2 16.4 2H7.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C6 2.76 6 3.04 6 3.6V10m12 0H6m12 0v.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C15.72 15 14.88 15 13.2 15h-2.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C6 12.72 6 11.88 6 10.2V10m8.5 5v4.5a2.5 2.5 0 0 1-5 0V15"
    />
  </svg>
`;
