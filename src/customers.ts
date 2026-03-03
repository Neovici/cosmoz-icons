import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const customersIcon = ({
  slot,
  title,
  className,
  width = '20',
  height = '20',
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
    class=${`customers-icon ${className ?? ''}`}
    viewBox="0 0 20 20"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${width}
    height=${height}
    fill="none"
    style=${ifDefined(styles)}
  >
    ${when(title, () => svg`<title>${title}</title>`)}
    <path
      d="M13 8C13 10.027 11.6625 11.5 10 11.5C8.3375 11.5 7 10.027 7 8C7 5.97302 8.3375 4.5 10 4.5C11.6625 4.5 13 5.97302 13 8Z"
      stroke="currentColor"
    />
    <path
      d="M5.5 16C5.5 13 7.41279 11.6602 10.0118 11.6602C12.6107 11.6602 14.5 13.5 14.5 16"
      stroke="currentColor"
    />
    <path
      d="M14 5.5C15.0964 5.5 16 6.4375 16 7.88281C16 9.32813 15.1084 10.5 14 10.5"
      stroke="currentColor"
    />
    <path d="M14 10.5C15.5 10.5 16.5 11.5 16.5 14" stroke="currentColor" />
    <path
      d="M6 5.5C4.90361 5.5 4 6.4375 4 7.88281C4 9.32813 4.89157 10.5 6 10.5"
      stroke="currentColor"
    />
    <path d="M6 10.5C4.5 10.5 3.5 11.5 3.5 14" stroke="currentColor" />
  </svg>
`;
