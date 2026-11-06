import{A as m,b as a}from"./iframe-o1Jey6i2.js";const y=e=>e??m;function p(e,o,t){return e?o(e):t?.(e)}const u=e=>{const o=e.target,t=o.value.toLowerCase(),c=o.closest(".icon-gallery"),s=c.querySelectorAll("[data-icon]"),i=c.querySelector(".icon-gallery-count");let l=0;for(const n of s){const r=n.dataset.icon.toLowerCase().includes(t);n.hidden=!r,r&&l++}i.textContent=`${l} icon${l!==1?"s":""}`},v=e=>o=>{const t=o.target.closest("[data-icon]");if(!t)return;const s=t.closest(".icon-gallery").querySelector(".icon-gallery-toast"),l=`import { ${t.dataset.icon} } from '${e}';`;navigator.clipboard.writeText(l),t.classList.add("icon-gallery-cell--copied"),s.classList.add("icon-gallery-toast--visible"),setTimeout(()=>{t.classList.remove("icon-gallery-cell--copied"),s.classList.remove("icon-gallery-toast--visible")},800)},d=[["xs","0.875rem"],["sm","1rem"],["md","1.125rem"],["lg","1.25rem"],["xl","1.5rem"]],$=e=>a` <div class="icon-gallery-sizes">
		${d.map(([o,t])=>a` <div
					class="icon-gallery-sample"
					style="--icon-gallery-size: var(--cz-icon-size-${o}, ${t})"
				>
					<div class="icon-gallery-artwork">${e()}</div>
					<span>${o}</span>
				</div>`)}
	</div>`,f=()=>a` <label class="icon-gallery-scheme"
		>Appearance
		<select
			@change=${e=>{const o=e.target;document.documentElement.style.colorScheme=o.value}}
		>
			<option value="light">Light</option>
			<option value="dark">Dark</option>
		</select>
	</label>`;export{v as c,u as f,$ as i,p as n,y as o,f as s};
