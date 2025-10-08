<script setup>
import { computed } from 'vue';
import { usePageFrontmatter } from 'vuepress/client';

const frontmatter = usePageFrontmatter()

const footerText = computed(() => {
    const type = frontmatter.value.type
    switch (type) {
        case 'web':
            return 'Medimo automatiseert het geneesmiddelproces zodat (medicatie)fouten kunnen worden voorkomen. Het product omvat functionaliteit zoals het elektronisch voorschrijven, het uitvoeren van medicatiebewaking en het uitvoeren van elektronische toedienregistratie en wordt beschouwd als een medisch hulpmiddel (MDR Klasse I) . Medimo wordt in Nederland op de markt gebracht door Medimo B.V. h.o.d.n. Enovation Medimo, Soestdijkseweg Zuid 13, 3732 HC De Bilt. Enovation Medimo is gecertificeerd tegen de ISO 27001, ISO9001, ISO27799 en NEN 7510. Dit document behoort tot de gebruikershandleiding van versie: 2025-3, productiedatum: 23-09-2025'
        case 'app':
            return 'Dit is de App footer'
        default:
            return null
    }
})

</script>

<template>
    <div v-if="footerText" class="article-footer">
        {{ footerText }}
    </div>
</template>

<style scoped>
.article-footer {
    margin-top: 1rem;
    text-align: justify;
    /* padding: 1rem; */
    border-top: 1px solid #ddd;
    font-size: 0.9rem;
    color: #666;
    text-align: left;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>