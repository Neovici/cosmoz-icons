// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const hourglass02Icon = ({
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
    class=${`hourglass-02-icon ${className ?? ''}`}
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
      d="M18.163 2H5.837A.837.837 0 0 0 5 2.837a10.05 10.05 0 0 0 2.943 7.106l1.22 1.22c.12.12.181.181.224.24a1 1 0 0 1 0 1.195 2.508 2.508 0 0 1-.224.24l-1.22 1.219A10.05 10.05 0 0 0 5 21.163c0 .462.375.837.837.837h12.326a.837.837 0 0 0 .837-.837 10.05 10.05 0 0 0-2.943-7.106l-1.22-1.22c-.12-.12-.181-.181-.224-.24a1 1 0 0 1 0-1.195c.043-.058.103-.118.224-.24l1.22-1.219A10.05 10.05 0 0 0 19 2.837.837.837 0 0 0 18.163 2Z"
    />
  </svg>
`;
