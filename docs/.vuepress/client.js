import { defineClientConfig } from "vuepress/client"
import Layout from "./layouts/Layout.vue"

export default defineClientConfig({
  layouts: {
    Layout,
  },
  enhance({ router }) {
    if (typeof window !== "undefined" && window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/"
          })
        }
      })
    }
  },
})
