// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const glasses02Icon = ({
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
    class=${`glasses-02-icon ${className ?? ''}`}
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
      d="M10 14.535a4.008 4.008 0 0 1 4 0M2 15l.701-7.015c.027-.266.04-.399.06-.513A3 3 0 0 1 5.485 5.01C5.599 5 5.733 5 6 5m16 10-.701-7.015c-.027-.266-.04-.399-.06-.513a3 3 0 0 0-2.723-2.463C18.402 5 18.268 5 18 5m-9.172 7.172a4 4 0 1 1-5.656 5.656 4 4 0 0 1 5.656-5.656Zm12 0a4 4 0 1 1-5.656 5.656 4 4 0 0 1 5.656-5.656Z"
    />
  </svg>
`;
