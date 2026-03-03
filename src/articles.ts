/* eslint-disable max-len */
import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const articlesIcon = ({
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
    class=${`articles-icon ${className ?? ''}`}
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
      d="M3.06485 10.6079L10.0601 3.64561C10.1538 3.55235 10.2806 3.5 10.4128 3.5L16 3.5C16.2761 3.5 16.5 3.72386 16.5 4L16.5 9.55659C16.5 9.68807 16.4482 9.81426 16.3559 9.90783L9.42062 16.9341C9.22607 17.1312 8.90835 17.1326 8.71206 16.9372L3.06485 11.3167C2.86847 11.1212 2.86847 10.8033 3.06485 10.6079Z"
      stroke="currentColor"
    />
    <circle
      cx="11.8995"
      cy="8.17157"
      r="1.5"
      transform="rotate(45 11.8995 8.17157)"
      stroke="currentColor"
    />
    <line
      x1="5.18198"
      y1="10.6464"
      x2="9.42462"
      y2="14.8891"
      stroke="currentColor"
    />
  </svg>
`;
