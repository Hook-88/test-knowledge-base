---
sidebar: false
title: Categorieën
discription: De categorieën van de Medimo kennisbank homepage
features:
  - title: Instructies
    details: Hier vind je instructies over het gebruik van Medimo.
  - title: Video's
    details: Alle webcasts, instructievideo's en webinars worden hier gepost.
  - title: Hulpkaarten
    details: Naast uitgebreide instructies kun je hier de verschillende hulpkaarten nagaan.
footer: Copyright © 2025-present Hook88 b.v.
pdfdownload: false
---

<script setup>
import CategoryLink from '@source/.vuepress/components/CategoryLink.vue'

</script>

# Koppelingen

Een overzicht van de beschikbare koppelingen.

<ul class="category-container">
    <li><CategoryLink title="Ysis - Gerimedica" discription="Alles de koppelingen met Ysis en Ysis Zorgdossier van Gerimedica" url="./../../beheer/koppelingen/ysis/" /></li>
    <li><CategoryLink title="Ons - Nedap" discription="Alles over het invoeren van medicatie-opdrachten." url="/aan-de-slag/voorschrijven/" /></li>
</ul>

Use the sidebar to navigate, or try the search box above 🔍

<style scoped>
    .category-container {
        list-style-type: none;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem; 
        padding: 0;
    }
</style>
