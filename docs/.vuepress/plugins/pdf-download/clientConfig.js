import { defineClientConfig } from "@vuepress/client"
import PdfDownload from "./PdfDownload.vue"

export default defineClientConfig({
  enhance({ app }) {
    app.component("PdfDownload", PdfDownload)
  },
})
