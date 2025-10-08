import comp from "/Users/paulushoekjan/repos/vue-press/test-knowledge-base/docs/.vuepress/.temp/pages/aan-de-slag/index.html.vue"
const data = JSON.parse("{\"path\":\"/aan-de-slag/\",\"title\":\"Categorieën\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":false,\"title\":\"Categorieën\",\"discription\":\"De categorieën van de Medimo kennisbank homepage\",\"features\":[{\"title\":\"Instructies\",\"details\":\"Hier vind je instructies over het gebruik van Medimo.\"},{\"title\":\"Video's\",\"details\":\"Alle webcasts, instructievideo's en webinars worden hier gepost.\"},{\"title\":\"Hulpkaarten\",\"details\":\"Naast uitgebreide instructies kun je hier de verschillende hulpkaarten nagaan.\"}],\"footer\":\"Copyright © 2025-present Hook88 b.v.\",\"pdfdownload\":false},\"git\":{},\"filePathRelative\":\"aan-de-slag/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
