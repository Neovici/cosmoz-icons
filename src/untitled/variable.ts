// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const variableIcon = ({
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
    class=${`variable-icon ${className ?? ''}`}
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
      d="M19.906 21A20.253 20.253 0 0 0 22 12c0-3.233-.754-6.289-2.094-9M4.094 3A20.253 20.253 0 0 0 2 12c0 3.233.754 6.289 2.094 9M16.549 8.625h-.09c-.653 0-1.274.287-1.7.786l-5.374 6.303a2.233 2.233 0 0 1-1.7.786h-.09m1.12-7.875h1.394c.5 0 .939.333 1.076.816l1.774 6.243a1.12 1.12 0 0 0 1.077.816h1.394"
    />
  </svg>
`;
