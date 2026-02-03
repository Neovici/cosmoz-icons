#!/usr/bin/env node

/**
 * Generate lit-html icon components from Untitled UI SVG icons.
 *
 * Usage: node scripts/generate-untitled-icons.mjs [git-ref]
 *
 * Clones the untitleduico/icons repository at the given git ref (default: main),
 * parses all SVG files, and generates TypeScript lit-html template files
 * in src/untitled/.
 */

import { execSync } from 'node:child_process';
import { mkdtempSync, rmSync, readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { DOMParser } from '@xmldom/xmldom';

const REPO_URL = 'https://github.com/untitleduico/icons.git';
const OUTPUT_DIR = join(import.meta.dirname, '..', 'src', 'untitled');

// Common stroke attributes set on the SVG wrapper, not on individual elements
const SVG_WRAPPER_ATTRS = new Set([
	'stroke',
	'stroke-width',
	'stroke-linecap',
	'stroke-linejoin',
]);

/**
 * Convert kebab-case filename to camelCase export name.
 * e.g. "activity-heart" -> "activityHeart"
 */
function toExportName(basename) {
	return basename.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

/**
 * Use kebab-case filename directly as CSS class name.
 * e.g. "activity-heart" -> "activity-heart"
 */
function toCssClass(basename) {
	return basename;
}

/**
 * Serialize an SVG child element to a lit-html svg tagged template string.
 * Extracts all attributes except the common stroke ones (which go on the SVG wrapper).
 */
function serializeElement(element) {
	const tag = element.tagName;
	const attrs = [];

	for (let i = 0; i < element.attributes.length; i++) {
		const attr = element.attributes[i];
		if (!SVG_WRAPPER_ATTRS.has(attr.name)) {
			attrs.push(`${attr.name}="${attr.value}"`);
		}
	}

	return `<${tag} ${attrs.join(' ')} />`;
}

/**
 * Parse an SVG file and extract its child elements.
 */
function parseSvg(content) {
	const parser = new DOMParser();
	const doc = parser.parseFromString(content, 'image/svg+xml');
	const svg = doc.documentElement;

	const children = [];
	for (let i = 0; i < svg.childNodes.length; i++) {
		const node = svg.childNodes[i];
		if (node.nodeType === 1) {
			// Element node
			children.push(serializeElement(node));
		}
	}

	return children;
}

/**
 * Generate a lit-html TypeScript icon file.
 */
function generateIconFile(basename, svgChildren) {
	const exportName = toExportName(basename);
	const cssClass = toCssClass(basename);
	const childrenStr = svgChildren.map((c) => `\t\t${c}`).join('\n');

	return `// AUTO-GENERATED - DO NOT EDIT
// Source: untitleduico/icons (https://github.com/untitleduico/icons)
// License: MIT

import { html, svg } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { when } from 'lit-html/directives/when.js';

export const ${exportName} = ({
	slot,
	title,
	className,
	width = '24',
	height = '24',
	styles,
}: {
	slot?: string;
	title?: string;
	className?: string;
	width?: string;
	height?: string;
	styles?: string;
} = {}) => html\`
	<svg
		slot=\${ifDefined(slot)}
		class=\${\`${cssClass} \${className ?? ''}\`}
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		width=\${width}
		height=\${height}
		style=\${ifDefined(styles)}
	>
		\${when(title, () => svg\`<title>\${title}</title>\`)}
${childrenStr}
	</svg>
\`;
`;
}

/**
 * Generate the index.ts barrel file re-exporting all icons.
 */
function generateIndexFile(basenames) {
	const lines = [
		'// AUTO-GENERATED - DO NOT EDIT',
		'// Source: untitleduico/icons (https://github.com/untitleduico/icons)',
		'// License: MIT',
		'',
	];

	for (const basename of basenames.sort()) {
		lines.push(`export * from './${basename}';`);
	}

	lines.push('');
	return lines.join('\n');
}

// --- Main ---

const ref = process.argv[2] || 'main';

console.log(`Cloning untitleduico/icons at ref "${ref}"...`);
const tmpDir = mkdtempSync(join(tmpdir(), 'untitled-icons-'));

try {
	execSync(`git clone --depth 1 --branch ${ref} ${REPO_URL} ${tmpDir}`, {
		stdio: 'inherit',
	});

	const iconsDir = join(tmpDir, 'icons');
	const svgFiles = readdirSync(iconsDir)
		.filter((f) => f.endsWith('.svg'))
		.sort();

	console.log(`Found ${svgFiles.length} SVG icons.`);

	// Ensure output directory exists
	mkdirSync(OUTPUT_DIR, { recursive: true });

	const basenames = [];

	for (const file of svgFiles) {
		const basename = file.replace('.svg', '');
		const content = readFileSync(join(iconsDir, file), 'utf-8');
		const children = parseSvg(content);

		if (children.length === 0) {
			console.warn(`Warning: ${file} has no SVG child elements, skipping.`);
			continue;
		}

		const tsContent = generateIconFile(basename, children);
		writeFileSync(join(OUTPUT_DIR, `${basename}.ts`), tsContent);
		basenames.push(basename);
	}

	// Generate index.ts
	const indexContent = generateIndexFile(basenames);
	writeFileSync(join(OUTPUT_DIR, 'index.ts'), indexContent);

	console.log(
		`Generated ${basenames.length} icon files + index.ts in src/untitled/.`,
	);
} finally {
	rmSync(tmpDir, { recursive: true, force: true });
}
