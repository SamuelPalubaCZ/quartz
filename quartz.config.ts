import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Samuel Paluba",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "vercel",
    },
    locale: "cs-CZ",
    baseUrl: "www.paluba.me",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#f5f5f5",
          gray: "#666666",
          darkgray: "#333333",
          dark: "#000000",
          secondary: "#000000",
          tertiary: "#666666",
          highlight: "rgba(0, 0, 0, 0.05)",
          textHighlight: "#eeeeee",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#111111",
          gray: "#999999",
          darkgray: "#cccccc",
          dark: "#ffffff",
          secondary: "#ffffff",
          tertiary: "#999999",
          highlight: "rgba(255, 255, 255, 0.05)",
          textHighlight: "#333333",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "one-dark-pro",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: false,
        parseArrows: true,
        parseTags: true,
        parseBlockReferences: true,
        enableYouTubeEmbed: true,
        enableVideoEmbed: true,
        enableCheckbox: true,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({
        maxDepth: 3,
        minEntries: 1,
        showByDefault: true,
        collapseByDefault: false,
      }),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
        prettyLinks: true,
        openLinksInNewTab: false,
      }),
      Plugin.Description({
        descriptionLength: 150,
      }),
      Plugin.Latex({
        renderEngine: "katex"
      }),
      Plugin.HardLineBreaks(),
    ],
    filters: [
      Plugin.RemoveDrafts(),
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        rssLimit: 10,
        rssFullHtml: true,
        includeEmptyFiles: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CNAME(),
    ],
  },
}

export default config
