import comp from "/Users/paulushoekjan/repos/vue-press/test-knowledge-base/docs/.vuepress/.temp/pages/faq/troubleshooting.html.vue"
const data = JSON.parse("{\"path\":\"/faq/troubleshooting.html\",\"title\":\"Troubleshooting\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Troubleshooting\",\"tags\":[\"faq\",\"errors\",\"fixes\"]},\"git\":{},\"filePathRelative\":\"faq/troubleshooting.md\"}")
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
