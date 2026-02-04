// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const percent03Icon = ({
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
    class=${`percent-03-icon ${className ?? ''}`}
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
      d="M9 9h.01M15 15h.01M16 8l-8 8m1.5-7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6.5-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </svg>
`;
