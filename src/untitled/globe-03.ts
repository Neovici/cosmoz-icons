// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const globe03Icon = ({
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
    class=${`globe-03-icon ${className ?? ''}`}
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
      d="M12 2c3 2 3.923 6.292 4 10-.077 3.708-1 8-4 10m0-20C9 4 8.077 8.292 8 12c.077 3.708 1 8 4 10m0-20C6.477 2 2 6.477 2 12M12 2c5.523 0 10 4.477 10 10M12 22c5.523 0 10-4.477 10-10M12 22C6.477 22 2 17.523 2 12m20 0c-2 3-6.292 3.923-10 4-3.708-.077-8-1-10-4m20 0c-2-3-6.292-3.923-10-4-3.708.077-8 1-10 4"
    />
  </svg>
`;
