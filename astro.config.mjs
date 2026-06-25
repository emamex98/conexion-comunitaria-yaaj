// @ts-check
import { unified } from '@astrojs/markdown-remark';
import { defineConfig } from 'astro/config';

const externalHrefPattern = /^(https?:)?\/\//i;

function externalMarkdownLinks() {
	return (tree) => {
		function visit(node) {
			if (node?.type === 'element' && node.tagName === 'a') {
				const href = node.properties?.href;

				if (typeof href === 'string' && externalHrefPattern.test(href)) {
					node.properties.target ??= '_blank';
					node.properties.rel ??= 'noopener noreferrer';
				}
			}

			if (Array.isArray(node?.children)) {
				node.children.forEach(visit);
			}
		}

		visit(tree);
	};
}

// https://astro.build/config
export default defineConfig({
	markdown: {
		processor: unified({
			rehypePlugins: [externalMarkdownLinks],
		}),
	},
});
