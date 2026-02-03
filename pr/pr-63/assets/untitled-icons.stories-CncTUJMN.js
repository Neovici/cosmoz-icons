import{b as c,w as d}from"./iframe-BeZUDxhl.js";import{o as s,n as p,f as v,c as m}from"./icons-DQaaK1Hb.js";import"./preload-helper-PPVm8Dsz.js";const $=({slot:e,title:o,className:i,width:l="24",height:r="24",styles:a}={})=>c`
	<svg
		slot=${s(e)}
		class=${`check-icon ${i??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		width=${l}
		height=${r}
		style=${s(a)}
	>
		${p(o,()=>d`<title>${o}</title>`)}
		<path d="M20 6 9 17l-5-5" />
	</svg>
`,g=Object.freeze(Object.defineProperty({__proto__:null,checkIcon:$},Symbol.toStringTag,{value:"Module"})),I={title:"Untitled UI Icons"},t=Object.entries(g),n=()=>c`
    <div class="icon-gallery">
        <input
            class="icon-gallery-search"
            type="text"
            placeholder="Search icons..."
            @input=${v}
        />
        <div class="icon-gallery-count">${t.length} icons</div>
        <div class="icon-gallery-grid" @click=${m("@neovici/cosmoz-icons/untitled")}>
            ${t.map(([e,o])=>c`
                    <div class="icon-gallery-cell" data-icon=${e}>
                        ${o()}
                        <span class="icon-gallery-label" title=${e}>${e}</span>
                    </div>
                `)}
        </div>
    </div>
`;n.parameters={docs:{description:{story:"Icons from the Untitled UI icon set (MIT licensed). Click an icon to copy its import statement."}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => html\`
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
    </div>
\``,...n.parameters?.docs?.source}}};const f=["Icons"];export{n as Icons,f as __namedExportsOrder,I as default};
