import{b as s,w as d}from"./iframe-By2kPr0R.js";import{o as t,n as p,f as v,c as g}from"./icons-D82BdmEV.js";import"./preload-helper-PPVm8Dsz.js";const m=({slot:e,title:i,className:n,width:l="24",height:a="24",styles:r}={})=>s`
	<svg
		slot=${t(e)}
		class=${`check ${n??""}`}
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
		${p(i,()=>d`<title>${i}</title>`)}
		<path d="M20 6 9 17l-5-5" />
	</svg>
`,$=Object.freeze(Object.defineProperty({__proto__:null,check:m},Symbol.toStringTag,{value:"Module"})),f={title:"Untitled UI Icons"},c=Object.entries($),o=()=>s`
    <div class="icon-gallery">
        <input
            class="icon-gallery-search"
            type="text"
            placeholder="Search icons..."
            @input=${v}
        />
        <div class="icon-gallery-count">${c.length} icons</div>
        <div class="icon-gallery-grid" @click=${g("@neovici/cosmoz-icons/untitled")}>
            ${c.map(([e,i])=>s`
                    <div class="icon-gallery-cell" data-icon=${e}>
                        ${i()}
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
\``,...o.parameters?.docs?.source}}};const I=["Icons"];export{o as Icons,I as __namedExportsOrder,f as default};
