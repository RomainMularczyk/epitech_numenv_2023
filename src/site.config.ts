import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Romain & Myriam",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "Epitech .env{2024}",
	// Meta property used as the default description meta property
	description: "Présentation du cycle Epitech .env{2024}",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "fr-FR",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "fr-FR",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "fr-FR",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Include view-transitions: https://docs.astro.build/en/guides/view-transitions/
	includeViewTransitions: false,
	webmentions: {
		link: "https://webmention.io/astro-cactus.chriswilliams.dev/webmention",
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Programme",
		path: "program/",
	},
	{
		title: "Ressources",
		path: "resources/",
	},
  {
    title: "Introspection",
    path: "introspect/",
  }
];
