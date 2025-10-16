import comp from "/Users/paulushoekjan/repos/vue-press/test-knowledge-base/docs/.vuepress/.temp/pages/medimo-app/installation.html.vue"
const data = JSON.parse("{\"path\":\"/medimo-app/installation.html\",\"title\":\"instalatie\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"instalatie\",\"tags\":[\"setup\",\"install\",\"windows\"],\"type\":\"app\"},\"git\":{\"updatedTime\":1759961282000,\"contributors\":[{\"name\":\"Hook-88\",\"username\":\"Hook-88\",\"email\":\"82540853+Hook-88@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Hook-88\"}],\"changelog\":[{\"hash\":\"e8c3864eedf61cf63a75880caf560a272da61efd\",\"time\":1759961282000,\"email\":\"82540853+Hook-88@users.noreply.github.com\",\"author\":\"Hook-88\",\"message\":\"First commit\"}]},\"filePathRelative\":\"medimo-app/installation.md\"}")
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
