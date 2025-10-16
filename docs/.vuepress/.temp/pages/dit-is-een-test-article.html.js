import comp from "/Users/paulushoekjan/repos/vue-press/test-knowledge-base/docs/.vuepress/.temp/pages/dit-is-een-test-article.html.vue"
const data = JSON.parse("{\"path\":\"/dit-is-een-test-article.html\",\"title\":\"Dit is een test article\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Dit is een test article\",\"date\":\"2025-10-08T23:54:29.142Z\",\"tags\":[\"[test\",\"voorschrijven\",\"ander]\"],\"type\":\"web\"},\"git\":{\"updatedTime\":1759967719000,\"contributors\":[{\"name\":\"paul\",\"username\":\"paul\",\"email\":\"paul@hook88.nl\",\"commits\":1,\"url\":\"https://github.com/paul\"}],\"changelog\":[{\"hash\":\"9b30b054c3d0ef759806c841fb3687c789c2f923\",\"time\":1759967719000,\"email\":\"paul@hook88.nl\",\"author\":\"paul\",\"message\":\"Create Articles “dit-is-een-test-article”\"}]},\"filePathRelative\":\"dit-is-een-test-article.md\"}")
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
