<script setup>
import { onMounted } from 'vue'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import ArticleFooter from '../components/ArticleFooter.vue'
import TagsDisplay from '../components/TagsDisplay.vue'
import PdfDowload from '../components/PdfDowload.vue'

onMounted(() => {
    if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", (user) => {
            if (!user) {
                window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/"
                })
            }
        })
    }
})
</script>

<template>
    <ParentLayout>
        <template #page-content-top>
            <TagsDisplay />
        </template>

        <template #page-content-bottom>
            <PdfDowload />
            <ArticleFooter />
        </template>
    </ParentLayout>
</template>