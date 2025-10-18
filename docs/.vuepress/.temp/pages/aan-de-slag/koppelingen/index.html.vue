<template><div><h1 id="koppelingen" tabindex="-1"><a class="header-anchor" href="#koppelingen"><span>Koppelingen</span></a></h1>
<p>Een overzicht van de beschikbare koppelingen.</p>
<ul class="category-container">
    <li><CategoryLink title="Ysis - Gerimedica" discription="Alles de koppelingen met Ysis en Ysis Zorgdossier van Gerimedica" url="./../../beheer/koppelingen/ysis/" /></li>
    <li><CategoryLink title="Ons - Nedap" discription="Alles over het invoeren van medicatie-opdrachten." url="/aan-de-slag/voorschrijven/" /></li>
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