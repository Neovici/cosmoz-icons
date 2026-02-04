// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const gamingPad02Icon = ({
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
    class=${`gaming-pad-02-icon ${className ?? ''}`}
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
      d="M6 12h4m-2-2v4m7-1h.01M18 11h.01M5.2 18h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 16.48 22 15.92 22 14.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 6 19.92 6 18.8 6H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 7.52 2 8.08 2 9.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 18 4.08 18 5.2 18Z"
    />
  </svg>
`;
