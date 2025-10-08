import comp from "/Users/paulushoekjan/repos/vue-press/test-knowledge-base/docs/.vuepress/.temp/pages/toedienregistratie/installation.html.vue"
const data = JSON.parse("{\"path\":\"/toedienregistratie/installation.html\",\"title\":\"Installation\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Installation\",\"tags\":[\"setup\",\"install\",\"windows\"]},\"git\":{},\"filePathRelative\":\"toedienregistratie/installation.md\"}")
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
