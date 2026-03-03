import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const selfInvoicesIcon = ({
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
    class=${`self-invoices-icon ${className ?? ''}`}
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
      d="M4.5 3C4.5 2.72386 4.72386 2.5 5 2.5H16C16.2761 2.5 16.5 2.72386 16.5 3V17C16.5 17.2761 16.2761 17.5 16 17.5H5C4.72386 17.5 4.5 17.2761 4.5 17V3Z"
      stroke="currentColor"
    />
    <line x1="6" y1="5.5" x2="8" y2="5.5" stroke="currentColor" />
    <line x1="6" y1="8.5" x2="14" y2="8.5" stroke="currentColor" />
    <path d="M6.5 15L6.5 8" stroke="currentColor" />
    <path d="M12.5 15L12.5 8" stroke="currentColor" />
    <path d="M10.5 15L10.5 8" stroke="currentColor" />
    <path d="M14.5 15L14.5 8" stroke="currentColor" />
    <line x1="6" y1="14.5" x2="14" y2="14.5" stroke="currentColor" />
  </svg>
`;
