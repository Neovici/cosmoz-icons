import { html, type TemplateResult } from 'lit-html';

export const filterIcons = (e: InputEvent) => {
	const input = e.target as HTMLInputElement,
		query = input.value.toLowerCase(),
		gallery = input.closest('.icon-gallery')!,
		cells = gallery.querySelectorAll<HTMLElement>('[data-icon]'),
		count = gallery.querySelector('.icon-gallery-count')!;
	let visible = 0;
	for (const cell of cells) {
		const match = cell.dataset.icon!.toLowerCase().includes(query);
		cell.hidden = !match;
		if (match) visible++;
	}
	count.textContent = `${visible} icon${visible !== 1 ? 's' : ''}`;
};

export const copyImport = (packagePath: string) => (e: Event) => {
	const cell = (e.target as HTMLElement).closest<HTMLElement>('[data-icon]');
	if (!cell) return;
	const gallery = cell.closest('.icon-gallery')!;
	const toast = gallery.querySelector('.icon-gallery-toast')!;
	const name = cell.dataset.icon!;
	const text = `import { ${name} } from '${packagePath}';`;
	navigator.clipboard.writeText(text);
	cell.classList.add('icon-gallery-cell--copied');
	toast.classList.add('icon-gallery-toast--visible');
	setTimeout(() => {
		cell.classList.remove('icon-gallery-cell--copied');
		toast.classList.remove('icon-gallery-toast--visible');
	}, 800);
};

export const iconSizes = [
	['xs', '0.875rem'],
	['sm', '1rem'],
	['md', '1.125rem'],
	['lg', '1.25rem'],
	['xl', '1.5rem'],
] as const;

export const iconSamples = (icon: () => TemplateResult) =>
	html` <div class="icon-gallery-sizes">
		${iconSizes.map(
			([size, fallback]) =>
				html` <div
					class="icon-gallery-sample"
					style="--icon-gallery-size: var(--cz-icon-size-${size}, ${fallback})"
				>
					<div class="icon-gallery-artwork">${icon()}</div>
					<span>${size}</span>
				</div>`,
		)}
	</div>`;

export const schemeControl = () =>
	html` <label class="icon-gallery-scheme"
		>Appearance
		<select
			@change=${(event: Event) => {
				const select = event.target as HTMLSelectElement;
				document.documentElement.style.colorScheme = select.value;
			}}
		>
			<option value="light">Light</option>
			<option value="dark">Dark</option>
		</select>
	</label>`;
