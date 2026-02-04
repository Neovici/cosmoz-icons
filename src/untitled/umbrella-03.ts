// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const umbrella03Icon = ({
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
    class=${`umbrella-03-icon ${className ?? ''}`}
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
      d="M6.25 21.96 12 12m5-8.66C12.687.85 7.29 1.938 4.246 5.683c-.297.366-.446.548-.489.81-.034.209.017.485.123.667.134.23.371.366.845.64l14.55 8.4c.474.274.711.41.976.412a1.1 1.1 0 0 0 .64-.227c.205-.168.289-.388.457-.828C23.07 11.048 21.313 5.83 17 3.34Zm0 0C15.087 2.235 11.297 5.217 8.536 10M17 3.34c1.913 1.105 1.226 5.877-1.536 10.66M22 22H2"
    />
  </svg>
`;
