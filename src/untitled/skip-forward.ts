// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const skipForwardIcon = ({
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
    class=${`skip-forward-icon ${className ?? ''}`}
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
      d="M19 5v14M7.6 17.92l5.838-4.67c.534-.428.801-.641.898-.9a1 1 0 0 0 0-.7c-.097-.259-.364-.472-.898-.9L7.6 6.08c-.833-.666-1.25-1-1.6-1a1 1 0 0 0-.783.377C5 5.73 5 6.263 5 7.329v9.342c0 1.066 0 1.599.218 1.872a1 1 0 0 0 .783.376c.35 0 .766-.333 1.599-.999Z"
    />
  </svg>
`;
