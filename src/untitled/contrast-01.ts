// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const contrast01Icon = ({
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
    class=${`contrast-01-icon ${className ?? ''}`}
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
      d="M12 2c.592 0 1.171.051 1.735.15M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10m0-20v20m5.738-18.191c.954.67 1.786 1.502 2.455 2.456m1.657 4a10.064 10.064 0 0 1 0 3.47m-1.66 4.006c-.67.952-1.5 1.782-2.453 2.45m-4.004 1.66A10.21 10.21 0 0 1 12 22"
    />
  </svg>
`;
