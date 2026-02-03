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
	const name = cell.dataset.icon!;
	const text = `import { ${name} } from '${packagePath}';`;
	navigator.clipboard.writeText(text);
	cell.classList.add('icon-gallery-cell--copied');
	setTimeout(() => cell.classList.remove('icon-gallery-cell--copied'), 1500);
};
