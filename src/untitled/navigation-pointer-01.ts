// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const navigationPointer01Icon = ({
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
    class=${`navigation-pointer-01-icon ${className ?? ''}`}
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
      d="M3.413 10.745c-.595-.232-.893-.348-.98-.515a.5.5 0 0 1 0-.461c.087-.167.385-.283.98-.515L20.3 2.664c.537-.21.806-.315.978-.258a.5.5 0 0 1 .316.316c.057.172-.048.44-.258.977l-6.59 16.888c-.232.595-.348.893-.515.98a.5.5 0 0 1-.462 0c-.167-.088-.282-.385-.514-.98l-2.628-6.759a1.075 1.075 0 0 0-.107-.232.5.5 0 0 0-.116-.117 1.069 1.069 0 0 0-.232-.106l-6.759-2.628Z"
    />
  </svg>
`;
