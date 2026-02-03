import{b as c,w as d}from"./iframe-tXreCZOx.js";import{o as n,n as p,f as v,c as g}from"./icons-D7alHQ9r.js";import"./preload-helper-PPVm8Dsz.js";const y=({slot:e,title:i,className:s,width:t="24",height:a="24",styles:r}={})=>c`
	<svg
		slot=${n(e)}
		class=${`check-icon ${s??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		width=${t}
		height=${a}
		style=${n(r)}
	>
		${p(i,()=>d`<title>${i}</title>`)}
		<path d="M20 6 9 17l-5-5" />
	</svg>
`,m=Object.freeze(Object.defineProperty({__proto__:null,checkIcon:y},Symbol.toStringTag,{value:"Module"})),I={title:"Untitled UI Icons"},l=Object.entries(m),o=()=>c`
    <div class="icon-gallery">
        <input
            class="icon-gallery-search"
            type="text"
            placeholder="Search icons..."
            @input=${v}
        />
        <div class="icon-gallery-toolbar">
            <div class="icon-gallery-count">${l.length} icons</div>
            <div class="icon-gallery-toast">Copied to clipboard</div>
        </div>
        <div class="icon-gallery-grid" @click=${g("@neovici/cosmoz-icons/untitled")}>
            ${l.map(([e,i])=>c`
                    <div class="icon-gallery-cell" data-icon=${e}>
                        ${i()}
                        <span class="icon-gallery-label" title=${e}>${e}</span>
                    </div>
                `)}
        </div>
    </div>
`;o.parameters={docs:{description:{story:"Icons from the Untitled UI icon set (MIT licensed). Click an icon to copy its import statement."}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => html\`
    <div class="icon-gallery">
        <input
            class="icon-gallery-search"
            type="text"
            placeholder="Search icons..."
            @input=\${filterIcons}
        />
        <div class="icon-gallery-toolbar">
            <div class="icon-gallery-count">\${entries.length} icons</div>
            <div class="icon-gallery-toast">Copied to clipboard</div>
        </div>
        <div class="icon-gallery-grid" @click=\${copyImport('@neovici/cosmoz-icons/untitled')}>
            \${entries.map(([k, value]) => html\`
                    <div class="icon-gallery-cell" data-icon=\${k}>
                        \${value()}
                        <span class="icon-gallery-label" title=\${k}>\${k}</span>
                    </div>
                \`)}
        </div>
    </div>
\``,...o.parameters?.docs?.source}}};const b=["Icons"];export{o as Icons,b as __namedExportsOrder,I as default};
