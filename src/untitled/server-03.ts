// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const server03Icon = ({
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
    class=${`server-03-icon ${className ?? ''}`}
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
      d="m22 17.5-.692-10.03c-.108-1.575-.163-2.362-.504-2.96a3 3 0 0 0-1.298-1.21C18.887 3 18.098 3 16.52 3H7.48c-1.578 0-2.367 0-2.986.3a3 3 0 0 0-1.298 1.21c-.341.598-.396 1.385-.504 2.96L2 17.5m20 0a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 17.5m20 0a3.5 3.5 0 0 0-3.5-3.5h-13A3.5 3.5 0 0 0 2 17.5m4 0h.01m5.99 0h6"
    />
  </svg>
`;
