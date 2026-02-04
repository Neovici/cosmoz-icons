// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const star05Icon = ({
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
    class=${`star-05-icon ${className ?? ''}`}
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
      d="m12 2-1.302 5.206c-.254 1.016-.38 1.524-.645 1.937a3 3 0 0 1-.91.91c-.413.265-.921.391-1.937.645L2 12l5.206 1.302c1.016.254 1.524.38 1.937.645a3 3 0 0 1 .91.91c.265.413.391.921.645 1.937L12 22l1.302-5.206c.254-1.016.38-1.524.645-1.937.234-.366.544-.676.91-.91.413-.265.921-.391 1.937-.645L22 12l-5.206-1.302c-1.016-.254-1.524-.38-1.937-.645a3 3 0 0 1-.91-.91c-.265-.413-.391-.921-.645-1.937L12 2Z"
    />
  </svg>
`;
