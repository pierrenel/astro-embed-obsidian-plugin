# Astro Obsidian Embed Plugin

This Astro plugin allows you to easily embed content in your Markdown files using a custom code block syntax. It is designed to work with the [Obsidian Link Embed plugin](https://github.com/Seraphli/obsidian-link-embed), which allows you to embed content in Obsidian markdown files.

## Installation

```bash
npm install astro-obsidian-embed-plugin
```

## Usage

1. Add the plugin to your `astro.config.mjs` file:

```javascript
import { defineConfig } from 'astro/config';
import embedObsidianPlugin from 'astro-obsidian-embed-plugin';

export default defineConfig({
  integrations: [embedObsidianPlugin()],
});
```

2. In your Markdown files, use the following syntax to embed content:
```
  ```embed
  title: "Example Title"
  image: "https://example.com/image.jpg"
  description: "This is an example description."
  url: "https://example.com"
  ```
```

or just edit your markdown in Obsidian and use the [Obsidian Link Embed plugin](https://github.com/Seraphli/obsidian-link-embed) to embed content.

The plugin will transform this into a nicely formatted embed in your rendered page.

## License

MIT License
