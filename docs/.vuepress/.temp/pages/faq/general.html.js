import comp from "/Users/paulushoekjan/repos/vue-press/test-knowledge-base/docs/.vuepress/.temp/pages/faq/general.html.vue"
const data = JSON.parse("{\"path\":\"/faq/general.html\",\"title\":\"General FAQ\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"General FAQ\",\"tags\":[\"faq\",\"common questions\"]},\"git\":{},\"filePathRelative\":\"faq/general.md\"}")
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
