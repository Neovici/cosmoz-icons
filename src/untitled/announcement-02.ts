// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const announcement02Icon = ({
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
    class=${`announcement-02-icon ${className ?? ''}`}
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
      d="m4 14 1.575 6.299c.044.177.066.265.092.343a2 2 0 0 0 1.733 1.35c.08.007.172.007.355.007.228 0 .343 0 .44-.01a2 2 0 0 0 1.797-1.797c.009-.096.009-.21.009-.44V5.5m8.5 8a3.5 3.5 0 1 0 0-7m-8.25-1H6.5a4.5 4.5 0 0 0 0 9h3.75c1.766 0 3.927.947 5.594 1.856.973.53 1.46.795 1.778.756a.946.946 0 0 0 .691-.411c.187-.26.187-.783.187-1.827V5.126c0-1.044 0-1.566-.187-1.827a.946.946 0 0 0-.691-.411c-.319-.039-.805.226-1.778.756-1.667.909-3.828 1.856-5.594 1.856Z"
    />
  </svg>
`;
