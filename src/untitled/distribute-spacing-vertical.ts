// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const distributeSpacingVerticalIcon = ({
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
    class=${`distribute-spacing-vertical-icon ${className ?? ''}`}
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
      d="M21 3H3m18 18H3m2-9c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C6.602 9 7.068 9 8 9h8c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C19 10.602 19 11.068 19 12c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C17.398 15 16.932 15 16 15H8c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C5 13.398 5 12.932 5 12Z"
    />
  </svg>
`;
