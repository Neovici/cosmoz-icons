import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const interconnectionsIcon = ({
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
    class=${`interconnections-icon ${className ?? ''}`}
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
      d="M15.392 8.327a2.525 2.525 0 0 0 0-3.582c-.994-.983-2.6-.993-3.583 0L4.745 11.81a2.526 2.526 0 0 0 0 3.583c.993.983 2.599.993 3.582 0l7.065-7.065Z"
      stroke="currentColor"
    />
    <path
      d="M11.81 15.392a2.526 2.526 0 0 0 3.582 0c.983-.994.993-2.6 0-3.583L8.326 4.745a2.525 2.525 0 0 0-3.582 0 2.525 2.525 0 0 0 0 3.582l7.064 7.065Z"
      stroke="currentColor"
    />
  </svg>
`;
