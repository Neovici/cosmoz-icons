// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const globe06Icon = ({
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
    class=${`globe-06-icon ${className ?? ''}`}
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
      d="m2.687 15.645 1.908-1.101a.5.5 0 0 1 .342-.059l3.754.703a.5.5 0 0 0 .592-.494l-.014-3.29a.5.5 0 0 1 .068-.254l1.895-3.244a.5.5 0 0 0-.023-.54l-3.19-4.54M19 4.859C13.5 7.5 16.5 11 17.5 11.5c1.877.938 4.488 1 4.488 1 .008-.166.012-.332.012-.5 0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c.168 0 .334-.004.5-.012m4.258-.048-3.168-8.35 8.349 3.167-3.702 1.48-1.48 3.702Z"
    />
  </svg>
`;
