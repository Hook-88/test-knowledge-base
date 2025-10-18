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

# Ysis artikelen

Alle Ysis artikelen, FAQs, en troubleshooting.

<ul class="category-container">
    <li><CategoryLink title="Ysis SSO" discription="Handleiding van de single sing-on koppeling met Ysis" url="ysis-sso.html" /></li>
    <li><CategoryLink title="Ysis Zorgdossier SSO" discription="Handleiding van de single sing-on koppeling met Ysis Zorgdossier" url="ysis-zorgdossier-sso.html" /></li>
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
