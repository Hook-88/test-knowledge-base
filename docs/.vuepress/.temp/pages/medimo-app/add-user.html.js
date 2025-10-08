import comp from "/Users/paulushoekjan/repos/vue-press/test-knowledge-base/docs/.vuepress/.temp/pages/medimo-app/add-user.html.vue"
const data = JSON.parse("{\"path\":\"/medimo-app/add-user.html\",\"title\":\"Gebruiker toevoegen\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Gebruiker toevoegen\",\"tags\":[\"setup\",\"install\",\"windows\"],\"type\":\"app\"},\"git\":{},\"filePathRelative\":\"medimo-app/add-user.md\"}")
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
