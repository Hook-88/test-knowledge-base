import { GitContributors } from "/Users/paulushoekjan/repos/vue-press/test-knowledge-base/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/Users/paulushoekjan/repos/vue-press/test-knowledge-base/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
