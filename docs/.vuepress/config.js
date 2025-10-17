import { defaultTheme } from "@vuepress/theme-default"
import { defineUserConfig } from "vuepress"
import { viteBundler } from "@vuepress/bundler-vite"
import { searchPlugin } from "@vuepress/plugin-search"

export default defineUserConfig({
  lang: "en-US",

  title: "Kennisbank",
  description: "Kennisbank van Medimo",

  head: [
    [
      "script",
      { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
    ],
  ],

  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search Documentation",
        },
      },

      getExtraFields: (page) => {
        const fields = []

        // Check if the page has 'tags' in its frontmatter and if it's an array
        if (page.frontmatter.tags && Array.isArray(page.frontmatter.tags)) {
          // Join all tags into a single string, separated by spaces.
          // For your example: ['nieuw', 'medicatie', 'geneesmiddel', 'starten']
          // will become: "nieuw medicatie geneesmiddel starten"
          // This string will be added to the search index for that page.
          fields.push(page.frontmatter.tags.join(" "))
        }

        // IMPORTANT: You might also want to ensure any *other* custom frontmatter
        // fields that you want searchable are added here. If you have an `author`
        // field you want searchable, for example:
        // if (page.frontmatter.author && typeof page.frontmatter.author === 'string') {
        //   fields.push(page.frontmatter.author);
        // }

        return fields // Return the array of extra strings to be indexed
      },
    }),
  ],

  theme: defaultTheme({
    logo: "https://enovationmedimo.nl/wp-content/uploads/sites/7/2024/04/ENO_Entiteit_Medimo_Staand_Fullcolour-600x542.png",

    navbar: [
      { text: "Home", link: "/" },
      { text: "FAQ", link: "/faq/general.md" },
      { text: "MedimoApp", link: "/medimo-app/installation.md" },

      {
        text: "Voorschrijven",
        children: [
          {
            text: "Status",
            link: "/voorschrijven/status.md",
          },
          {
            text: "Medicatie invoeren",
            link: "/voorschrijven/nieuwe-medicatie-starten.md",
          },
        ],
      },

      {
        text: "modules",
        children: [
          {
            text: "Voorschrijven",
            link: "/voorschrijven/nieuwe-medicatie-starten.md",
          },
          {
            text: "Toedienregistratie",
            link: "/toedienregistratie/installation.md",
          },
          {
            text: "Medicatie bestellen",
            link: "/toedienregistratie/installation.md",
          },
        ],
      },

      {
        text: "Koppelingen",
        children: [
          {
            text: "Ysis",
            link: "/beheer/koppelingen/ysis/ysis-algemeen",
          },
          {
            text: "Ons",
            link: "/beheer/koppelingen/ons/ons-algemeen",
          },
        ],
      },
    ],

    sidebar: {
      "/toedienregistratie/": [
        {
          text: "Toedienregistratie",
          collapsible: true,
          children: ["installation.md", "first-steps.md"],
        },
      ],

      "/faq": [
        {
          text: "FAQ",
          collapsible: true,
          children: ["general.md", "troubleshooting.md"],
        },
      ],

      "/medimo-app/": [
        {
          text: "MedimoApp",
          collapsible: true,
          children: ["installation.md", "add-user.md"],
        },
      ],

      "/voorschrijven/": [
        {
          text: "Status",
          collapsible: true,
          children: ["status.md", "overzicht-van-status.md"],
        },
        {
          text: "Medicatie invoeren",
          collapsible: true,
          children: [
            "nieuwe-medicatie-starten.md",
            "dosering-aanpassen.md",
            "dosering-aanpassen-uitgebreid.md",
            "dosering-aanpassen-schema.md",
          ],
        },
      ],

      "/beheer/koppelingen/ysis": [
        {
          text: "Ysis Zorgdossier",
          collapsible: true,
          children: ["ysis-zorgdossier-sso.md"],
        },
        {
          text: "Ysis",
          collapsible: true,
          children: ["ysis-sso.md"],
        },
      ],
    },
    sidebarDepth: 2,
    editLink: false,
  }),

  bundler: viteBundler(),
})
