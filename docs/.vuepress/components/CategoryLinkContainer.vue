<script setup>

const props = defineProps({
    categoryArray: []
})

</script>

<template>
    <ul>
        <li v-for="category in props.categoryArray">
            <CategoryLink title={{ category.title }} discription="vla" />
        </li>
    </ul>
</template>