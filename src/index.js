import { visit } from 'unist-util-visit';
import yaml from 'js-yaml';

export function embedObsidianPlugin() {
  return {
    name: 'astro-obsidian-embed-plugin',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        updateConfig({
          markdown: {
            remarkPlugins: [
              () => (tree) => {
                visit(tree, 'code', (node) => {
                  if (node.lang === 'embed') {
                    const data = yaml.load(node.value);
                    node.type = 'html';
                    node.value = `
                      <div style="border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; max-width: 600px; margin: 1rem 0;">
                        <a href="${data.url}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; display: flex;">
                          <div style="flex: 0 0 150px;">
                            <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover;" />
                          </div>
                          <div style="padding: 1rem; flex: 1;">
                            <h3 style="margin: 0 0 0.5rem;">${data.title}</h3>
                            <p style="margin: 0; font-size: 0.9rem; color: #666;">${data.description}</p>
                          </div>
                        </a>
                      </div>
                    `;
                  }
                });
              },
            ],
          },
        });
      },
    },
  };
}
