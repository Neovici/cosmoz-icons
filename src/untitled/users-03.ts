// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const users03Icon = ({
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
    class=${`users-03-icon ${className ?? ''}`}
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
      d="M18 15.837c1.456.731 2.704 1.905 3.615 3.373.18.29.27.436.302.637.063.409-.216.912-.597 1.073-.188.08-.398.08-.82.08M16 11.532a4.5 4.5 0 0 0 0-8.064M14 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM2.56 18.938C4.153 16.545 6.67 15 9.5 15s5.346 1.545 6.94 3.938c.35.525.525.787.505 1.122-.016.26-.187.58-.396.738-.267.202-.635.202-1.371.202H3.822c-.736 0-1.104 0-1.372-.202a1.109 1.109 0 0 1-.395-.738c-.02-.335.155-.597.504-1.122Z"
    />
  </svg>
`;
