import{b as i,w as d}from"./iframe-3BIoRYSN.js";import{o as t,n as p,f as v,c as g}from"./icons-BzoVGbFQ.js";import"./preload-helper-PPVm8Dsz.js";const u=({slot:e,title:n,className:s,width:l="24",height:a="24",styles:r}={})=>i`
	<svg
		slot=${t(e)}
		class=${`check-icon ${s??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		width=${l}
		height=${a}
		style=${t(r)}
	>
		${p(n,()=>d`<title>${n}</title>`)}
		<path d="M20 6 9 17l-5-5" />
	</svg>
`,y=Object.freeze(Object.defineProperty({__proto__:null,checkIcon:u},Symbol.toStringTag,{value:"Module"})),f={title:"Untitled UI Icons"},c=Object.entries(y),o=()=>i`
    <div class="icon-gallery">
        <input
            class="icon-gallery-search"
            type="text"
            placeholder="Search icons..."
            @input=${v}
        />
        <div class="icon-gallery-note">
            Browse icons by category on
            <a href="https://untitledui.com/free-icons" target="_blank" rel="noopener">untitledui.com</a>
        </div>
        <div class="icon-gallery-count">${c.length} icons</div>
        <div class="icon-gallery-grid" @click=${g("@neovici/cosmoz-icons/untitled")}>
            ${c.map(([e,n])=>i`
                    <div class="icon-gallery-cell" data-icon=${e}>
                        ${n()}
                        <span class="icon-gallery-label" title=${e}>${e}</span>
                    </div>
                `)}
        </div>
        <div class="icon-gallery-toast">Copied to clipboard</div>
    </div>
`;o.parameters={docs:{description:{story:"Icons from the Untitled UI icon set (MIT licensed). Click an icon to copy its import statement."}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => html\`
    <div class="icon-gallery">
        <input
            class="icon-gallery-search"
            type="text"
            placeholder="Search icons..."
            @input=\${filterIcons}
        />
        <div class="icon-gallery-note">
            Browse icons by category on
            <a href="https://untitledui.com/free-icons" target="_blank" rel="noopener">untitledui.com</a>
        </div>
        <div class="icon-gallery-count">\${entries.length} icons</div>
        <div class="icon-gallery-grid" @click=\${copyImport('@neovici/cosmoz-icons/untitled')}>
            \${entries.map(([k, value]) => html\`
                    <div class="icon-gallery-cell" data-icon=\${k}>
                        \${value()}
                        <span class="icon-gallery-label" title=\${k}>\${k}</span>
                    </div>
                \`)}
        </div>
        <div class="icon-gallery-toast">Copied to clipboard</div>
    </div>
\``,...o.parameters?.docs?.source}}};const b=["Icons"];export{o as Icons,b as __namedExportsOrder,f as default};
