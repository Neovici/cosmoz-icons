import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const nodeSelectorIcon = ({
  slot,
  title,
  className,
  width = '14',
  height = '15',
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
    class=${`node-selector-icon ${className ?? ''}`}
    viewBox="0 0 14 15"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width=${width}
    height=${height}
    fill="none"
    style=${ifDefined(styles)}
  >
    ${when(title, () => svg`<title>${title}</title>`)}
    <ellipse
      cx="2.84607"
      cy="2.94932"
      rx="1.84607"
      ry="1.94932"
      stroke="currentColor"
    />
    <ellipse
      cx="11.1539"
      cy="11.7206"
      rx="1.94932"
      ry="1.84607"
      transform="rotate(90 11.1539 11.7206)"
      stroke="currentColor"
    />
    <path d="M2.84375 4.89893V13.6709" stroke="currentColor" />
    <path
      d="M2.84375 4.89893V5.26029C2.84375 8.82874 5.73655 11.7215 9.305 11.7215V11.7215"
      stroke="currentColor"
    />
  </svg>
`;
