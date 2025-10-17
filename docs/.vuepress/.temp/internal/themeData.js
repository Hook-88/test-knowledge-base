export const themeData = JSON.parse("{\"logo\":\"https://enovationmedimo.nl/wp-content/uploads/sites/7/2024/04/ENO_Entiteit_Medimo_Staand_Fullcolour-600x542.png\",\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"FAQ\",\"link\":\"/faq/general.md\"},{\"text\":\"MedimoApp\",\"link\":\"/medimo-app/installation.md\"},{\"text\":\"Voorschrijven\",\"children\":[{\"text\":\"Status\",\"link\":\"/voorschrijven/status.md\"},{\"text\":\"Medicatie invoeren\",\"link\":\"/voorschrijven/nieuwe-medicatie-starten.md\"}]},{\"text\":\"modules\",\"children\":[{\"text\":\"Voorschrijven\",\"link\":\"/voorschrijven/nieuwe-medicatie-starten.md\"},{\"text\":\"Toedienregistratie\",\"link\":\"/toedienregistratie/installation.md\"},{\"text\":\"Medicatie bestellen\",\"link\":\"/toedienregistratie/installation.md\"}]},{\"text\":\"Koppelingen\",\"children\":[{\"text\":\"Ysis\",\"link\":\"/beheer/koppelingen/ysis/ysis-algemeen\"}]}],\"sidebar\":{\"/toedienregistratie/\":[{\"text\":\"Toedienregistratie\",\"collapsible\":true,\"children\":[\"installation.md\",\"first-steps.md\"]}],\"/faq\":[{\"text\":\"FAQ\",\"collapsible\":true,\"children\":[\"general.md\",\"troubleshooting.md\"]}],\"/medimo-app/\":[{\"text\":\"MedimoApp\",\"collapsible\":true,\"children\":[\"installation.md\",\"add-user.md\"]}],\"/voorschrijven/\":[{\"text\":\"Status\",\"collapsible\":true,\"children\":[\"status.md\",\"overzicht-van-status.md\"]},{\"text\":\"Medicatie invoeren\",\"collapsible\":true,\"children\":[\"nieuwe-medicatie-starten.md\",\"dosering-aanpassen.md\",\"dosering-aanpassen-uitgebreid.md\",\"dosering-aanpassen-schema.md\"]}],\"/beheer/koppelingen/ysis\":[{\"text\":\"Ysis Zorgdossier SSO\",\"collapsible\":true,\"children\":[\"ysis-zorgdossier-sso.md\"]}]},\"sidebarDepth\":2,\"editLink\":false,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
