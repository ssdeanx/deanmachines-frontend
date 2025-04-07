import { NavItem } from "@/types/nav";

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    discord?: string;
    docs: string;
  };
  mainNav: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "Mastra AI",
  description:
    "Build and deploy intelligent AI agents that adapt to your needs.",
  url: "https://mastra.ai",
  ogImage: "/og.jpg",
  links: {
    twitter: "https://twitter.com/mastraai",
    github: "https://github.com/mastraai",
    discord: "https://discord.gg/mastraai",
    docs: "/docs",
  },
  mainNav: [
    {
      title: "Features",
      href: "/features",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};
