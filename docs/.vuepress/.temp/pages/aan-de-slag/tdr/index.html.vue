<template><div><h1 id="dit-zijn-de-categorien" tabindex="-1"><a class="header-anchor" href="#dit-zijn-de-categorien"><span>Dit zijn de categoriën</span></a></h1>
<p>This is where we collect guides, FAQs, and troubleshooting docs.</p>
<ul class="category-container">
    <li><CategoryLink title="Installatie" discription="Instructies voor instaleren van de TDR" url="./../../toedienregistratie/installation.html" /></li>
    <li><CategoryLink title="First steps" discription="DE eerste stappen." url="./../../toedienregistratie/first-steps.html" /></li>
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