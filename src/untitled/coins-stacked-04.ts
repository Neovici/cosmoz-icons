// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const coinsStacked04Icon = ({
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
    class=${`coins-stacked-04-icon ${className ?? ''}`}
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
      d="M20 5c0 1.657-3.582 3-8 3S4 6.657 4 5m16 0c0-1.657-3.582-3-8-3S4 3.343 4 5m16 0v14c0 1.657-3.582 3-8 3s-8-1.343-8-3V5m16 4.667c0 1.656-3.582 3-8 3s-8-1.344-8-3m16 4.663c0 1.657-3.582 3-8 3s-8-1.343-8-3"
    />
  </svg>
`;
