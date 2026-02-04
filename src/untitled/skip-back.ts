// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const skipBackIcon = ({
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
    class=${`skip-back-icon ${className ?? ''}`}
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
      d="M5 19V5m11.4 1.08-5.838 4.67c-.534.428-.801.641-.898.9a1 1 0 0 0 0 .7c.097.259.364.472.898.9l5.839 4.67c.832.666 1.248.999 1.598 1a1 1 0 0 0 .783-.377c.218-.273.218-.806.218-1.872V7.329c0-1.066 0-1.599-.218-1.872a1 1 0 0 0-.783-.376c-.35 0-.766.333-1.598.999Z"
    />
  </svg>
`;
