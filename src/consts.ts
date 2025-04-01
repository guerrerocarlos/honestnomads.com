// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "HonestNomads";
export const SITE_TITLE = "HonestNomads";
export const SITE_DESCRIPTION = "HonestNomads - A blog about travel, technology, and more";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "HonestNomads - All Tags";
export const Tags_DESCRIPTION =
  "HonestNomads - All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in HonestNomads`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in HonestNomads`,
    description: `Browse all articles under the ${category} category in HonestNomads`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/Relocation-Guide/1/", title: "Relocation Guide" },
  { href: "/category/Community/1/", title: "Community" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/contact/", title: "Contact Us" },
  { href: "/about/", title: "About Us" },
  { href: "/privacy-policy/", title: "Privacy Policy" }
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://twitter.com/honestnomads",
    icon: "tabler:brand-twitter",
    label: "Twitter",
  },
  {
    href: "https://github.com/guerrerocarlos",
    icon: "tabler:brand-github",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
