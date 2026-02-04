// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const minimize02Icon = ({
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
    class=${`minimize-02-icon ${className ?? ''}`}
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
      d="M3 8h.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.31-1.311C8 5.72 8 4.88 8 3.2V3M3 16h.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.31 1.311C8 18.28 8 19.12 8 20.8v.2m8-18v.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.31 1.311C18.28 8 19.12 8 20.8 8h.2m-5 13v-.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.31-1.311C18.28 16 19.12 16 20.8 16h.2"
    />
  </svg>
`;
