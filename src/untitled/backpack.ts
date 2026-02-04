// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const backpackIcon = ({
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
    class=${`backpack-icon ${className ?? ''}`}
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
      d="M20 13v4.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C18.48 21 17.92 21 16.8 21H7.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4 19.48 4 18.92 4 17.8V13m5-3h6m-5.714 4h5.428c2.133 0 3.199 0 4.021-.396a4 4 0 0 0 1.869-1.868C21 10.912 21 9.845 21 7.713c0-1.6 0-2.399-.297-3.016a3 3 0 0 0-1.401-1.4C18.685 3 17.885 3 16.286 3H7.714c-1.6 0-2.399 0-3.016.297a3 3 0 0 0-1.4 1.401C3 5.315 3 6.115 3 7.714c0 2.133 0 3.199.396 4.021a4 4 0 0 0 1.868 1.869C6.087 14 7.154 14 9.286 14Z"
    />
  </svg>
`;
