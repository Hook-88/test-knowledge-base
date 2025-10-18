<template><div><h1 id="dit-zijn-de-categorien" tabindex="-1"><a class="header-anchor" href="#dit-zijn-de-categorien"><span>Dit zijn de categoriën</span></a></h1>
<p>This is where we collect guides, FAQs, and troubleshooting docs.</p>
<ul class="category-container">
    <li><CategoryLink title="Toedienregistratie" discription="Alles over het gebruik van de toedienregistratie." url="http://localhost:8080/aan-de-slag/tdr/" /></li>
    <li><CategoryLink title="Voorschrijven" discription="Alles over het invoeren van medicatie-opdrachten." url="/voorschrijven/" /></li>
    <li><CategoryLink title="Koppelingen" discription="Alle Systemen waarmee kan worden gekoppeld." url="#" /></li>
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