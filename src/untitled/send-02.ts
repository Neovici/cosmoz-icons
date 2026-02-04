// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const send02Icon = ({
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
    class=${`send-02-icon ${className ?? ''}`}
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
      d="M12 19v-7m.292 7.084 6.978 2.337c.547.183.82.274.99.209a.5.5 0 0 0 .3-.331c.048-.175-.07-.438-.305-.964l-7.49-16.713c-.23-.514-.346-.772-.507-.852a.5.5 0 0 0-.443 0c-.16.079-.277.336-.51.85L3.753 20.336c-.237.526-.356.789-.308.963a.5.5 0 0 0 .3.332c.168.066.442-.025.99-.206l7.052-2.341c.094-.031.14-.047.189-.053a.5.5 0 0 1 .128 0c.048.006.095.022.189.053Z"
    />
  </svg>
`;
