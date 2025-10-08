import { getDirname, path } from "@vuepress/utils"

const __dirname = getDirname(import.meta.url)

export default {
  name: "vuepress-plugin-pdf-download",
  clientConfigFile: path.resolve(__dirname, "./clientConfig.js"),
}
