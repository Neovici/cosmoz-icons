// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const hexagon02Icon = ({
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
    class=${`hexagon-02-icon ${className ?? ''}`}
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
      d="M21.568 11.223c.157.284.236.425.267.575a.998.998 0 0 1 0 .403c-.03.15-.11.292-.267.576l-4.111 7.4c-.167.3-.25.45-.368.558a1 1 0 0 1-.364.215c-.153.05-.324.05-.667.05H7.941c-.343 0-.514 0-.667-.05a1 1 0 0 1-.364-.215c-.118-.109-.201-.258-.368-.558l-4.11-7.4c-.158-.284-.237-.425-.268-.575a1 1 0 0 1 0-.403c.03-.15.11-.292.267-.576l4.111-7.4c.167-.3.25-.45.368-.558a1 1 0 0 1 .364-.215C7.427 3 7.598 3 7.941 3h8.117c.343 0 .514 0 .667.05a1 1 0 0 1 .364.215c.118.109.201.258.368.558l4.11 7.4Z"
    />
  </svg>
`;
