import { CodeTabs } from "/Users/paulushoekjan/repos/vue-press/test-knowledge-base/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/paulushoekjan/repos/vue-press/test-knowledge-base/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/paulushoekjan/repos/vue-press/test-knowledge-base/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
