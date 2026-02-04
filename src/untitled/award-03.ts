// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const award03Icon = ({
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
    class=${`award-03-icon ${className ?? ''}`}
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
      d="M7.869 15.46 7 22l4.588-2.753c.15-.09.225-.135.305-.152a.5.5 0 0 1 .214 0c.08.017.155.062.305.152L17 22l-.868-6.543m.294-11.208c.154.373.45.67.824.825l1.309.542a1.525 1.525 0 0 1 .825 1.992l-.542 1.308a1.522 1.522 0 0 0 0 1.168l.542 1.307a1.525 1.525 0 0 1-.826 1.993l-1.308.542c-.373.154-.67.45-.825.824l-.542 1.309a1.524 1.524 0 0 1-1.992.825l-1.308-.542a1.525 1.525 0 0 0-1.166 0l-1.31.542a1.524 1.524 0 0 1-1.99-.824l-.542-1.31a1.524 1.524 0 0 0-.824-.825l-1.31-.542a1.524 1.524 0 0 1-.825-1.991l.542-1.308a1.525 1.525 0 0 0 0-1.167l-.542-1.31a1.525 1.525 0 0 1 .826-1.992l1.307-.542c.374-.154.67-.45.825-.823l.543-1.309a1.524 1.524 0 0 1 1.991-.825l1.308.542c.374.154.793.154 1.167-.001l1.31-.54a1.525 1.525 0 0 1 1.99.825l.543 1.31v-.003Z"
    />
  </svg>
`;
