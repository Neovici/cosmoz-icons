// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const star02Icon = ({
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
    class=${`star-02-icon ${className ?? ''}`}
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
      d="M11.306 3.207c.228-.396.342-.594.49-.66a.5.5 0 0 1 .408 0c.148.066.262.264.49.66l1.955 3.402c.084.147.126.22.185.273a.5.5 0 0 0 .18.105c.077.024.161.024.33.024l3.924-.008c.457-.001.685-.002.817.094a.5.5 0 0 1 .203.353c.017.162-.097.36-.326.754l-1.97 3.394c-.084.147-.126.22-.143.297a.5.5 0 0 0 0 .21c.017.077.059.15.144.296l1.969 3.395c.229.395.343.592.326.754a.5.5 0 0 1-.203.353c-.132.096-.36.095-.817.094l-3.924-.008c-.169 0-.253 0-.33.024a.5.5 0 0 0-.18.104c-.059.054-.101.127-.185.273l-1.955 3.403c-.228.396-.342.594-.49.66a.5.5 0 0 1-.408 0c-.148-.066-.262-.264-.49-.66L9.351 17.39c-.084-.147-.126-.22-.185-.273a.5.5 0 0 0-.18-.105c-.077-.024-.161-.024-.33-.024l-3.924.008c-.457.001-.685.002-.817-.094a.5.5 0 0 1-.204-.353c-.016-.162.098-.36.327-.754l1.97-3.395c.084-.146.126-.219.143-.297a.5.5 0 0 0 0-.208c-.017-.078-.06-.151-.144-.298L4.038 8.204c-.229-.395-.343-.592-.327-.754a.5.5 0 0 1 .204-.353c.132-.096.36-.095.817-.094l3.924.008c.169 0 .253 0 .33-.024a.5.5 0 0 0 .18-.105c.059-.053.1-.126.185-.273l1.955-3.402Z"
    />
  </svg>
`;
