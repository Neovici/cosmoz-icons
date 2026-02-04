// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const logOut02Icon = ({
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
    class=${`log-out-02-icon ${className ?? ''}`}
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
      d="m16 17 5-5m0 0-5-5m5 5H9m3 5c0 .93 0 1.395-.102 1.776a3 3 0 0 1-2.122 2.122C9.395 21 8.93 21 8 21h-.5c-1.398 0-2.097 0-2.648-.228a3 3 0 0 1-1.624-1.624C3 18.597 3 17.898 3 16.5v-9c0-1.398 0-2.097.228-2.648a3 3 0 0 1 1.624-1.624C5.403 3 6.102 3 7.5 3H8c.93 0 1.395 0 1.776.102a3 3 0 0 1 2.122 2.122C12 5.605 12 6.07 12 7"
    />
  </svg>
`;
