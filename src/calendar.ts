import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const calendarIcon = ({
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
    class=${`calendar-icon ${className ?? ''}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15 15"
    fill="none"
    width=${width}
    height=${height}
    style=${ifDefined(styles)}
  >
    ${when(title, () => svg`<title>${title}</title>`)}
    <path
      d="M1.5 1.5H13.5C14.0523 1.5 14.5 1.94772 14.5 2.5V11V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H1.5C0.947716 14.5 0.5 14.0523 0.5 13.5V2.5C0.5 1.94772 0.947716 1.5 1.5 1.5Z"
      stroke="currentColor"
    />
    <path d="M1 4.5H14.5" stroke="currentColor" />
    <path d="M11.5 3V0M3.5 3V0" stroke="currentColor" />
    <path
      d="M9.5 7.5H11.5V9.5H9.5V7.5Z"
      fill="currentColor"
      stroke="currentColor"
      stroke-linejoin="round"
    />
  </svg>
`;
