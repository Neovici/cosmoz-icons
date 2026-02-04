// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const modem01Icon = ({
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
    class=${`modem-01-icon ${className ?? ''}`}
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
      d="M16.243 4.757a6 6 0 0 1 0 8.486m-8.486 0a6 6 0 0 1 0-8.486M4.858 16c-3.834-3.91-3.81-10.19.07-14.071m14.143 0c3.882 3.882 3.905 10.16.07 14.071M12 16V9M5 22h14c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C22 20.398 22 19.932 22 19c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C20.398 16 19.932 16 19 16H5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 17.602 2 18.068 2 19c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 22 4.068 22 5 22Z"
    />
  </svg>
`;
