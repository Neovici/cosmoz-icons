// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const fingerprint02Icon = ({
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
    class=${`fingerprint-02-icon ${className ?? ''}`}
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
      d="M12 10v4M7.447 3.421A8 8 0 0 1 20 10v1.237M4.416 7.447A7.99 7.99 0 0 0 4 10v4a8.004 8.004 0 0 0 5.744 7.677m9.915-5.358a8.02 8.02 0 0 1-4.922 5.2m-.412-15.373A4.5 4.5 0 0 0 7.5 10v2.95m9-1.91V14a4.5 4.5 0 0 1-6.82 3.857"
    />
  </svg>
`;
