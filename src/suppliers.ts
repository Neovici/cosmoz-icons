/* eslint-disable max-len */
import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const suppliersIcon = ({
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
    class=${`suppliers-icon ${className ?? ''}`}
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
      d="M7.39837 5.59184C5.38757 6.56092 4 8.61842 4 11C4 11.5494 4.07384 12.0815 4.21212 12.587M12.6016 5.59184C14.6124 6.56092 16 8.61842 16 11C16 11.5494 15.9262 12.0815 15.7879 12.587M12.8007 16.3076C11.9647 16.7497 11.0116 17 10 17C9.01778 17 8.09068 16.764 7.27233 16.3456"
      stroke="currentColor"
    />
    <circle cx="15" cy="15" r="2.5" stroke="currentColor" />
    <circle cx="5" cy="15" r="2.5" stroke="currentColor" />
    <circle cx="10" cy="5" r="2.5" stroke="currentColor" />
  </svg>
`;
