// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const sale02Icon = ({
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
    class=${`sale-02-icon ${className ?? ''}`}
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
      d="M9 9h.01M15 15h.01M16 8l-8 8M7.334 3.819a3.832 3.832 0 0 0 2.18-.904 3.832 3.832 0 0 1 4.972 0c.613.523 1.376.84 2.18.904a3.832 3.832 0 0 1 3.515 3.515 3.82 3.82 0 0 0 .904 2.18 3.832 3.832 0 0 1 0 4.972 3.832 3.832 0 0 0-.904 2.18 3.832 3.832 0 0 1-3.515 3.515 3.832 3.832 0 0 0-2.18.904 3.832 3.832 0 0 1-4.972 0 3.832 3.832 0 0 0-2.18-.904 3.832 3.832 0 0 1-3.515-3.515 3.832 3.832 0 0 0-.904-2.18 3.832 3.832 0 0 1 0-4.972c.523-.613.84-1.376.904-2.18a3.832 3.832 0 0 1 3.515-3.515ZM9.5 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
  </svg>
`;
