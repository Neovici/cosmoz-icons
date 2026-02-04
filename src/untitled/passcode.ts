// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const passcodeIcon = ({
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
    class=${`passcode-icon ${className ?? ''}`}
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
      d="M12 12h.005M17 12h.005M7 12h.005M5.2 7h13.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 8.52 22 9.08 22 10.2v3.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 17 19.92 17 18.8 17H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 15.48 2 14.92 2 13.8v-3.6c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 7 4.08 7 5.2 7Zm7.05 5a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Zm5 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Zm-10 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z"
    />
  </svg>
`;
