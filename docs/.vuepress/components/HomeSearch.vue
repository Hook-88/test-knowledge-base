<!-- <script setup>
import { useSearchIndex } from '@vuepress/plugin-search/client'
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchIndex = useSearchIndex()
const query = ref('')
const focused = ref(false)
const searchInput = ref(null)

const suggestions = computed(() => {
    if (!query.value) return []

    const results = []
    const queryLower = query.value.toLowerCase()

    for (const page of searchIndex.value) {
        if (
            page.title.toLowerCase().includes(queryLower) ||
            page.headers?.some(h => h.title.toLowerCase().includes(queryLower))
        ) {
            results.push(page)
            if (results.length >= 5) break
        }
    }

    return results
})

const goToPage = (path) => {
    router.push(path)
    query.value = ''
    focused.value = false
}

onMounted(() => {
    searchInput.value?.focus()
})
</script>

<template>
    <div class="home-search-container">
        <div class="search-box">
            <input ref="searchInput" v-model="query" type="search" placeholder="Search documentation..."
                @focus="focused = true" @blur="setTimeout(() => focused = false, 200)" />
            <ul v-if="focused && suggestions.length" class="suggestions">
                <li v-for="page in suggestions" :key="page.path" @click="goToPage(page.path)">
                    <a>{{ page.title }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.home-search-container {
    max-width: 700px;
    margin: 2rem auto 3rem;
    padding: 0 2rem;
}

.search-box {
    position: relative;
    width: 100%;
}

.search-box input {
    width: 100%;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 12px;
    border: 2px solid #1a3e70 !important;
    background-color: #fff;
    color: #2c3e50;
    box-sizing: border-box;
    transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
}

html.dark .search-box input,
html[data-theme="dark"] .search-box input,
.dark .search-box input {
    background-color: #1e1e1e !important;
    border-color: #fff !important;
    color: #e0e0e0 !important;
}

.search-box input::placeholder {
    color: #999;
}

html.dark .search-box input::placeholder,
html[data-theme="dark"] .search-box input::placeholder {
    color: #666;
}

.search-box input:focus {
    border-color: #1a3e70 !important;
    outline: none;
    box-shadow: 0 2px 8px rgba(26, 62, 112, 0.2);
}

.suggestions {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    right: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    max-height: 400px;
    overflow-y: auto;
    z-index: 100;
}

html.dark .suggestions,
html[data-theme="dark"] .suggestions {
    background-color: #1e1e1e !important;
    border-color: #444 !important;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
}

.suggestions li {
    padding: 0.75rem 1.25rem;
    cursor: pointer;
    border-bottom: 1px solid #eee;
    transition: background-color 0.2s;
}

html.dark .suggestions li,
html[data-theme="dark"] .suggestions li {
    border-bottom-color: #333;
}

.suggestions li:last-child {
    border-bottom: none;
}

.suggestions li:hover {
    background-color: #f5f5f5;
}

html.dark .suggestions li:hover,
html[data-theme="dark"] .suggestions li:hover {
    background-color: #2a2a2a;
}

.suggestions a {
    color: #2c3e50;
    text-decoration: none;
    display: block;
}

html.dark .suggestions a,
html[data-theme="dark"] .suggestions a {
    color: #e0e0e0;
}
</style> -->

<script setup>
import { useSearchIndex } from '@vuepress/plugin-search/client'
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchIndex = useSearchIndex()
const query = ref('')
const focused = ref(false)
const searchInput = ref(null)

const suggestions = computed(() => {
    if (!query.value) return []

    const results = []
    const queryLower = query.value.toLowerCase()

    for (const page of searchIndex.value) {
        // Check page title
        if (page.title.toLowerCase().includes(queryLower)) {
            results.push({
                path: page.path,
                title: page.title,
                header: null
            })
        }

        // Check headers
        if (page.headers) {
            for (const header of page.headers) {
                if (header.title.toLowerCase().includes(queryLower)) {
                    results.push({
                        path: page.path + '#' + header.slug,
                        title: page.title,
                        header: header.title
                    })
                }
            }
        }

        if (results.length >= 5) break
    }

    return results
})

const goToPage = (path) => {
    router.push(path)
    query.value = ''
    focused.value = false
}

onMounted(() => {
    searchInput.value?.focus()
})
</script>

<template>
    <div class="home-search-container">
        <div class="search-box">
            <input ref="searchInput" v-model="query" type="search" placeholder="Search documentation..."
                @focus="focused = true" @blur="setTimeout(() => focused = false, 200)" />
            <ul v-if="focused && suggestions.length" class="suggestions">
                <li v-for="(result, index) in suggestions" :key="index" @click="goToPage(result.path)">
                    <a>
                        <span class="page-title">{{ result.title }}</span>
                        <span v-if="result.header" class="header-title">
                            > {{ result.header }}
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.home-search-container {
    max-width: 700px;
    margin: 2rem auto 3rem;
    padding: 0 2rem;
}

.search-box {
    position: relative;
    width: 100%;
}

.search-box input {
    width: 100%;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 12px;
    border: 2px solid #1a3e70 !important;
    background-color: #fff;
    color: #2c3e50;
    box-sizing: border-box;
    transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
}

html.dark .search-box input,
html[data-theme="dark"] .search-box input,
.dark .search-box input {
    background-color: #1e1e1e !important;
    border-color: #fff !important;
    color: #e0e0e0 !important;
}

.search-box input::placeholder {
    color: #999;
}

html.dark .search-box input::placeholder,
html[data-theme="dark"] .search-box input::placeholder {
    color: #666;
}

.search-box input:focus {
    border-color: #1a3e70 !important;
    outline: none;
    box-shadow: 0 2px 8px rgba(26, 62, 112, 0.2);
}

.suggestions {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    right: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    max-height: 400px;
    overflow-y: auto;
    z-index: 100;
}

html.dark .suggestions,
html[data-theme="dark"] .suggestions {
    background-color: #1e1e1e !important;
    border-color: #444 !important;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
}

.suggestions li {
    padding: 0.75rem 1.25rem;
    cursor: pointer;
    border-bottom: 1px solid #eee;
    transition: background-color 0.2s;
}

html.dark .suggestions li,
html[data-theme="dark"] .suggestions li {
    border-bottom-color: #333;
}

.suggestions li:last-child {
    border-bottom: none;
}

.suggestions li:hover {
    background-color: #f5f5f5;
}

html.dark .suggestions li:hover,
html[data-theme="dark"] .suggestions li:hover {
    background-color: #2a2a2a;
}

.suggestions a {
    color: #2c3e50;
    text-decoration: none;
    display: block;
}

html.dark .suggestions a,
html[data-theme="dark"] .suggestions a {
    color: #e0e0e0;
}

.page-title {
    font-weight: 500;
}

.header-title {
    color: #666;
    margin-left: 0.5rem;
}

html.dark .header-title,
html[data-theme="dark"] .header-title {
    color: #999;
}
</style>