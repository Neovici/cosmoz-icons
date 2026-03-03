/* eslint-disable max-len */
import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const paymentsIcon = ({
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
    class=${`payments-icon ${className ?? ''}`}
    viewBox="0 0 20 20"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${width}
    height=${height}
    fill="none"
    style=${ifDefined(styles)}
  >
    ${when(title, () => svg`<title>${title}</title>`)}
    <path d="M4 16.5H17" stroke="currentColor" />
    <path d="M4 14.5H17" stroke="currentColor" />
    <path
      d="M4.5 4C4.5 3.72386 4.72386 3.5 5 3.5H16C16.2761 3.5 16.5 3.72386 16.5 4V11C16.5 11.2761 16.2761 11.5 16 11.5H5C4.72386 11.5 4.5 11.2761 4.5 11V4Z"
      stroke="currentColor"
    />
    <circle cx="10.5" cy="7.5" r="2" stroke="currentColor" />
    <path
      d="M7 11C7 10.7374 6.94827 10.4773 6.84776 10.2346C6.74725 9.99198 6.59993 9.7715 6.41421 9.58579C6.2285 9.40007 6.00802 9.25275 5.76537 9.15224C5.52272 9.05173 5.26264 9 5 9"
      stroke="currentColor"
    />
    <path
      d="M5 6C5.26264 6 5.52272 5.94827 5.76537 5.84776C6.00802 5.74725 6.2285 5.59993 6.41421 5.41421C6.59993 5.2285 6.74725 5.00802 6.84776 4.76537C6.94827 4.52272 7 4.26264 7 4"
      stroke="currentColor"
    />
    <path
      d="M14 4C14 4.26264 14.0517 4.52272 14.1522 4.76537C14.2528 5.00802 14.4001 5.2285 14.5858 5.41421C14.7715 5.59993 14.992 5.74725 15.2346 5.84776C15.4773 5.94827 15.7374 6 16 6"
      stroke="currentColor"
    />
    <path
      d="M16 9C15.7374 9 15.4773 9.05173 15.2346 9.15224C14.992 9.25275 14.7715 9.40007 14.5858 9.58579C14.4001 9.7715 14.2528 9.99198 14.1522 10.2346C14.0517 10.4773 14 10.7374 14 11"
      stroke="currentColor"
    />
  </svg>
`;
