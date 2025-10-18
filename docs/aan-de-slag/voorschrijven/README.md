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

# Dit zijn de categoriën

This is where we collect guides, FAQs, and troubleshooting docs.

<ul class="category-container">
    <li><CategoryLink title="Status van cliënt" discription="Toelichting op de status en hoe u die opzoekt." url="./../../voorschrijven/nieuwe-medicatie-starten.html" /></li>
    <li><CategoryLink title="Medicatie-opdracht invoeren" discription="Hoe u nieuwe medicatie-opdrachten invoert." url="./../../voorschrijven/nieuwe-medicatie-starten.html" /></li>
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
