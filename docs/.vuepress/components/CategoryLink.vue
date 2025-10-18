<script setup lang="js">

const props = defineProps({
    title: "",
    discription: "",
    url: "",
})

</script>

<template>
    <a :href=props.url class="category-wrapper">
        <h2>{{ props.title }}</h2>
        <p>{{ props.discription }}</p>
    </a>
</template>

<style scoped>
.category-wrapper {
    border: 1px solid;
    border-radius: .35rem;
    border-color: rgba(205, 205, 215, 0.3);
    height: 100%;
    padding: 0 1rem;
    display: block;
    text-decoration: none !important;
    color: inherit;
}

.category-wrapper:hover {
    cursor: pointer;
    border-color: #1a3e70;
}

.category-wrapper:hover h2 {
    color: #1a3e70;
}

.category-wrapper>p {
    margin-top: 0 !important;
    padding-top: 0;
}
</style>