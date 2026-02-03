import{b as r,w as g}from"./iframe-9HSvAGcu.js";import{o as p,n as v}from"./icons-D7KC3vVV.js";import"./preload-helper-PPVm8Dsz.js";const y=({slot:e,title:n,className:o,width:l="24",height:s="24",styles:c}={})=>r`
	<svg
		slot=${p(e)}
		class=${`check-icon ${o??""}`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		width=${l}
		height=${s}
		style=${p(c)}
	>
		${v(n,()=>g`<title>${n}</title>`)}
		<path d="M20 6 9 17l-5-5" />
	</svg>
`,$=Object.freeze(Object.defineProperty({__proto__:null,checkIcon:y},Symbol.toStringTag,{value:"Module"})),b={title:"Untitled UI Icons"},h=e=>{const n=e.target,o=n.value.toLowerCase(),l=n.closest(".icon-gallery"),s=l.querySelectorAll("[data-icon]"),c=l.querySelector(".icon-gallery-count");let i=0;for(const a of s){const d=a.dataset.icon.toLowerCase().includes(o);a.hidden=!d,d&&i++}c.textContent=`${i} icon${i!==1?"s":""}`},u=Object.entries($),t=()=>r`
    <div class="icon-gallery">
        <input
            class="icon-gallery-search"
            type="text"
            placeholder="Search icons..."
            @input=${h}
        />
        <div class="icon-gallery-count">${u.length} icons</div>
        <div class="icon-gallery-grid">
            ${u.map(([e,n])=>r`
                    <div class="icon-gallery-cell" data-icon=${e}>
                        ${n()}
                        <span class="icon-gallery-label" title=${e}>${e}</span>
                    </div>
                `)}
        </div>
    </div>
`;t.parameters={docs:{description:{story:"Icons from the Untitled UI icon set (MIT licensed)."}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => html\`
    <div class="icon-gallery">
        <input
            class="icon-gallery-search"
            type="text"
            placeholder="Search icons..."
            @input=\${filterIcons}
        />
        <div class="icon-gallery-count">\${entries.length} icons</div>
        <div class="icon-gallery-grid">
            \${entries.map(([k, value]) => html\`
                    <div class="icon-gallery-cell" data-icon=\${k}>
                        \${value()}
                        <span class="icon-gallery-label" title=\${k}>\${k}</span>
                    </div>
                \`)}
        </div>
    </div>
\``,...t.parameters?.docs?.source}}};const k=["Icons"];export{t as Icons,k as __namedExportsOrder,b as default};
