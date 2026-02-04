// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const navigationPointerOff02Icon = ({
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
    class=${`navigation-pointer-off-02-icon ${className ?? ''}`}
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
      d="m10.471 5.476.792-1.806c.232-.528.348-.792.51-.872a.5.5 0 0 1 .446 0c.162.08.278.344.51.872l3.172 7.233M8.947 8.952l-4.965 11.32c-.257.585-.385.878-.329 1.057a.5.5 0 0 0 .327.326c.18.056.472-.072 1.056-.33l6.637-2.92c.12-.052.178-.078.24-.088.055-.01.11-.01.165 0 .062.01.121.036.24.088l6.637 2.92c.584.258.877.386 1.056.33a.5.5 0 0 0 .327-.326c.056-.18-.072-.472-.328-1.057l-.205-.465M22 22 2 2"
    />
  </svg>
`;
