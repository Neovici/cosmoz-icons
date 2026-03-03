/* eslint-disable max-len */
import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const administrationIcon = ({
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
    class=${`administration-icon ${className ?? ''}`}
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
      stroke="currentColor"
      stroke-miterlimit="10"
      d="M12.797 14.501a3.36 3.36 0 0 1 3.012-.097c.5-.573.9-1.225 1.191-1.934-.85-.535-1.411-1.45-1.411-2.48s.56-1.944 1.411-2.479a6.695 6.695 0 0 0-1.19-1.935 3.391 3.391 0 0 1-3.013-.097c-.96-.515-1.521-1.42-1.601-2.382-.39-.058-.8-.097-1.201-.097-.4 0-.8.039-1.18.097-.08.963-.631 1.867-1.602 2.382a3.382 3.382 0 0 1-3.022.097A6.92 6.92 0 0 0 3 7.511C3.85 8.046 4.421 8.96 4.421 10c0 1.04-.57 1.954-1.421 2.489.28.71.69 1.361 1.19 1.935a3.381 3.381 0 0 1 3.023.097c.96.525 1.521 1.42 1.601 2.382.39.058.79.097 1.181.097.39 0 .81-.039 1.2-.097.08-.953.641-1.867 1.602-2.382v-.02Z"
    />
    <path
      stroke="currentColor"
      stroke-miterlimit="10"
      d="M12.5 10c0 1.387-1.113 2.5-2.5 2.5A2.491 2.491 0 0 1 7.5 10c0-1.387 1.113-2.5 2.5-2.5s2.5 1.113 2.5 2.5Z"
    />
  </svg>
`;
