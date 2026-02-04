// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const wind01Icon = ({
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
    class=${`wind-01-icon ${className ?? ''}`}
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
      d="M21 18s-1.19-.47-2-.698c-5.12-1.445-8.88 2.84-14 1.396C4.19 18.469 3 18 3 18m18-6s-1.19-.47-2-.698c-5.12-1.445-8.88 2.84-14 1.396C4.19 12.469 3 12 3 12m18-6s-1.19-.47-2-.698c-5.12-1.445-8.88 2.84-14 1.396C4.19 6.47 3 6 3 6"
    />
  </svg>
`;
