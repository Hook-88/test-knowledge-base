import comp from "/Users/paulushoekjan/repos/vue-press/test-knowledge-base/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Home\",\"discription\":\"Medimo kennisbank homepage\",\"home\":true,\"heroImage\":\"https://enovationmedimo.nl/wp-content/uploads/sites/7/2024/04/ENO_Entiteit_Medimo_Staand_Fullcolour-600x542.png\",\"actions\":[{\"text\":\"Aan de slag\",\"link\":\"/aan-de-slag/\",\"type\":\"primary\"},{\"text\":\"Introductie\",\"link\":\"https://enovationmedimo.nl/ons-verhaal/\",\"type\":\"secondary\"}],\"footer\":\"Copyright © 2025-present Hook88 b.v.\"},\"git\":{},\"filePathRelative\":\"README.md\"}")
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
