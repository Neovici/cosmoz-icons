// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const compass03Icon = ({
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
    class=${`compass-03-icon ${className ?? ''}`}
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <path
      d="M14.722 8.266c.489-.163.733-.244.895-.186a.5.5 0 0 1 .303.303c.058.162-.023.406-.186.895l-1.488 4.463c-.046.139-.07.208-.109.266a.5.5 0 0 1-.13.13c-.058.04-.127.063-.266.11l-4.463 1.487c-.489.163-.733.244-.895.186a.5.5 0 0 1-.303-.303c-.058-.162.023-.406.186-.895l1.488-4.463c.046-.139.07-.208.109-.266a.5.5 0 0 1 .13-.13c.058-.04.127-.063.266-.11l4.463-1.487Z"
    />
  </svg>
`;
