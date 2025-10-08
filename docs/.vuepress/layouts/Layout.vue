<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import ArticleFooter from '../components/ArticleFooter.vue';
import TagsDisplay from '../components/TagsDisplay.vue';
import PdfDowload from '../components/pdfDowload.vue';
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