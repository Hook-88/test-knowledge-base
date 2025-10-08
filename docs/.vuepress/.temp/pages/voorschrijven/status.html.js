import comp from "/Users/paulushoekjan/repos/vue-press/test-knowledge-base/docs/.vuepress/.temp/pages/voorschrijven/status.html.vue"
const data = JSON.parse("{\"path\":\"/voorschrijven/status.html\",\"title\":\"De Status\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"De Status\",\"tags\":[\"status\",\"medicatielijst\",\"cliënt\",\"bewoner\"],\"type\":\"web\"},\"git\":{},\"filePathRelative\":\"voorschrijven/status.md\"}")
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
