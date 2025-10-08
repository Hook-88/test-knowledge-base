import comp from "/Users/paulushoekjan/repos/vue-press/test-knowledge-base/docs/.vuepress/.temp/pages/guide/first-steps.html.vue"
const data = JSON.parse("{\"path\":\"/guide/first-steps.html\",\"title\":\"First Steps\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"First Steps\",\"tags\":[\"getting started\",\"basics\"]},\"headers\":[],\"git\":{},\"filePathRelative\":\"guide/first-steps.md\"}")
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
