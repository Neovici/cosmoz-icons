import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const filterIcon = ({
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
} = {}) =>
  html`<svg
    slot=${ifDefined(slot)}
    class=${`filter-icon ${className ?? ''}`}
    width=${width}
    height=${height}
    viewBox="0 0 11 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${ifDefined(styles)}
  >
    ${when(title, () => svg`<title>${title}</title>`)}
    <path
      d="M9.5 10L9.5 7M9.5 7L8 7M9.5 7L11 7M5.5 4.5L5.5 10M1.5 10L1.5 6M1.5 6L3.49691e-07 6M1.5 6L3 6M5.5 -1.4345e-06L5.5 3M5.5 3L7 3M5.5 3L4 3M9.5 -2.03848e-06L9.5 5.5M1.5 -1.78419e-06L1.5 4.5"
      stroke="black"
      stroke-linejoin="round"
    />
  </svg> `;
