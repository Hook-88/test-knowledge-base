<script setup>
import { computed } from 'vue';
import { usePageFrontmatter } from 'vuepress/client';

const frontmatter = usePageFrontmatter()

// Compute the tags, ensuring it's an array and exists
const tags = computed(() => {
    const pageTags = frontmatter.value.tags
    return Array.isArray(pageTags) ? pageTags : []
})

</script>

<template>
    <section v-if="tags.length" class="page-tags-wrapper">
        <span class="page-tags-label">Tags:</span>
        <span v-for="tag in tags" :key="tag" class="page-tag-item">
            {{ tag }}
        </span>
    </section>

    <section v-else class="page-tags-wrapper-dummy">

    </section>
</template>

<style scoped>
/* Add some basic styling for your tags */
.page-tags-wrapper {
    margin-top: 1.5rem;
    /* Space from content below */
    padding-top: 1rem;
    border-top: 1px solid var(--c-border);
    /* A subtle separator */
}

.page-tags-wrapper-dummy {
    margin-top: 1.5rem;
    /* Space from content below */
    padding-top: .2rem;
    border-top: 1px solid var(--c-border);
    /* A subtle separator */
}

.page-tags-label {
    font-weight: 600;
    margin-right: 0.5em;
    color: var(--c-text);
}

.page-tag-item {
    display: inline-block;
    background-color: var(--c-brand-light);
    /* Use a theme color */
    color: var(--c-text);
    /* Standard text color */
    padding: 0.2em 0.7em;
    border-radius: 4px;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
    /* For wrapping on smaller screens */
    font-size: 0.9em;
    /* Removed text-decoration: none; as it's not a link */
    /* transition: background-color 0.2s, color 0.2s; (also removed as no hover link effect) */

    border: 1px solid rgba(100, 100, 100, 0.5);
}

.page-tag-item:hover {
    cursor: pointer;
}

/* Removed .page-tag-item:hover styles as they are no longer links */
</style>