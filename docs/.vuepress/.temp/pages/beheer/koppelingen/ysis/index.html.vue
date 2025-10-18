<template><div><h1 id="ysis-artikelen" tabindex="-1"><a class="header-anchor" href="#ysis-artikelen"><span>Ysis artikelen</span></a></h1>
<p>Alle Ysis artikelen, FAQs, en troubleshooting.</p>
<ul class="category-container">
    <li><CategoryLink title="Ysis SSO" discription="Handleiding van de single sing-on koppeling met Ysis" url="ysis-sso.html" /></li>
    <li><CategoryLink title="Ysis Zorgdossier SSO" discription="Handleiding van de single sing-on koppeling met Ysis Zorgdossier" url="ysis-zorgdossier-sso.html" /></li>
</ul>
<p>Use the sidebar to navigate, or try the search box above 🔍</p>
</div></template>


<script setup>
import CategoryLink from '@source/.vuepress/components/CategoryLink.vue'

</script>
<style scoped>
    .category-container {
        list-style-type: none;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem; 
        padding: 0;
    }
</style>