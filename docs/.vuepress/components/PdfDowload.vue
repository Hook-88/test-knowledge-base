<!-- <template>
    <button @click="downloadPDF" class="pdf-download-btn" :disabled="isDownloading">
        {{ isDownloading ? 'Bezig...' : 'Download als PDF' }}
    </button>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { usePageFrontmatter } from 'vuepress/client';

const frontmatter = usePageFrontmatter();
const isDownloading = ref(false);

const downloadPDF = async () => {
    if (isDownloading.value) return;
    isDownloading.value = true;

    try {
        const html2pdfModule = await import('html2pdf.js');
        const html2pdf = html2pdfModule.default;

        // Get content and footer
        const contentArea = document.querySelector('main.vp-page');
        const footer = document.querySelector('.article-footer');

        if (!contentArea) {
            alert('Kan content niet vinden');
            return;
        }

        // Open all <details> elements
        const detailsElements = contentArea.querySelectorAll('details');
        detailsElements.forEach(details => {
            details.setAttribute('open', '');
        });

        // Find all tab components and activate each tab
        const tabGroups = contentArea.querySelectorAll('.vp-tabs, [class*="tab"]');

        for (const tabGroup of tabGroups) {
            const tabs = tabGroup.querySelectorAll('[role="tab"], .tab-button, [class*="tab-nav"]');

            for (const tab of tabs) {
                tab.click();
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }

        await nextTick();

        // Create wrapper
        const wrapper = document.createElement('div');
        wrapper.style.background = 'white';
        wrapper.style.color = '#000';
        wrapper.style.padding = '20px';
        wrapper.style.width = '100%';
        wrapper.style.maxWidth = '800px';
        wrapper.style.margin = '0';

        // Clone content
        const contentClone = contentArea.cloneNode(true);

        // Remove unwanted elements
        contentClone.querySelectorAll(
            '.pdf-download-btn, .vp-page-nav, .page-nav, .vp-page-meta, .article-footer'
        ).forEach(el => el.remove());

        // Fix details elements in clone
        const clonedDetails = contentClone.querySelectorAll('details');
        clonedDetails.forEach(details => {
            details.setAttribute('open', '');
            details.style.marginBottom = '1.5rem';

            const summary = details.querySelector('summary');
            if (summary) {
                summary.style.fontWeight = 'bold';
                summary.style.marginBottom = '0.5rem';
                summary.style.cursor = 'default';
                summary.style.color = '#000';
            }
        });

        // Make all tab content visible
        const tabPanels = contentClone.querySelectorAll('[role="tabpanel"], .tab-panel, [class*="tab-content"]');
        tabPanels.forEach(panel => {
            panel.style.display = 'block';
            panel.style.opacity = '1';
            panel.style.visibility = 'visible';
            panel.removeAttribute('hidden');
            panel.style.marginBottom = '2rem';
            panel.style.paddingBottom = '2rem';
            panel.style.borderBottom = '1px solid #eee';
        });

        // Add tab titles
        const tabNavs = contentClone.querySelectorAll('[role="tab"], .tab-button');
        tabNavs.forEach((nav, index) => {
            const correspondingPanel = contentClone.querySelectorAll('[role="tabpanel"], .tab-panel')[index];
            if (correspondingPanel && nav.textContent) {
                const title = document.createElement('h3');
                title.textContent = nav.textContent.trim();
                title.style.marginTop = index === 0 ? '0' : '2rem';
                title.style.color = '#3eaf7c';
                correspondingPanel.insertBefore(title, correspondingPanel.firstChild);
            }
        });

        // Reset positioning
        const allElements = contentClone.querySelectorAll('*');
        allElements.forEach(el => {
            const computed = window.getComputedStyle(el);
            if (computed.position === 'absolute' || computed.position === 'fixed') {
                el.style.position = 'relative';
                el.style.left = '0';
                el.style.right = '0';
                el.style.top = '0';
            }
            if (computed.transform && computed.transform !== 'none') {
                el.style.transform = 'none';
            }
        });

        contentClone.style.margin = '0';
        contentClone.style.padding = '0';
        contentClone.style.transform = 'none';
        contentClone.style.position = 'relative';
        contentClone.style.left = '0';
        contentClone.style.right = '0';

        // Fix text colors - including bold, strong, and emphasized text
        contentClone.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, td, th, span, div, a, strong, b, em').forEach(el => {
            if (!el.style.color) {
                el.style.color = '#000';
            }
        });

        // Specifically target bold elements to ensure they're dark and bold
        contentClone.querySelectorAll('strong, b').forEach(el => {
            el.style.color = '#000';
            el.style.fontWeight = 'bold';
        });

        wrapper.appendChild(contentClone);

        // Add footer
        if (footer) {
            const footerClone = footer.cloneNode(true);
            footerClone.style.marginTop = '3rem';
            footerClone.style.paddingTop = '1rem';
            footerClone.style.borderTop = '1px solid #ddd';
            footerClone.style.color = '#666';
            wrapper.appendChild(footerClone);
        }

        // Replace content temporarily
        const parent = contentArea.parentNode;
        parent.insertBefore(wrapper, contentArea);
        contentArea.style.display = 'none';

        await nextTick();
        await new Promise(resolve => setTimeout(resolve, 300));

        window.scrollTo(0, 0);
        await new Promise(resolve => setTimeout(resolve, 100));

        const opt = {
            margin: 10,
            filename: `${frontmatter.value.title || 'document'}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                backgroundColor: '#ffffff',
                windowWidth: wrapper.scrollWidth,
                windowHeight: wrapper.scrollHeight
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait'
            }
        };

        await html2pdf().set(opt).from(wrapper).save();

        console.log('PDF generated!');

        // Restore
        parent.removeChild(wrapper);
        contentArea.style.display = '';

    } catch (error) {
        console.error('PDF Error:', error);
        alert('Fout: ' + error.message);
    } finally {
        isDownloading.value = false;
    }
};
</script>

<style scoped>
.pdf-download-btn {
    padding: 8px 16px;
    background: #3eaf7c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
    margin: 1rem 0;
}

.pdf-download-btn:hover:not(:disabled) {
    background: #4abf8a;
}

.pdf-download-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
</style> -->

<template>
    <button v-if="showDownloadButton" @click="downloadPDF" class="pdf-download-btn" :disabled="isDownloading">
        {{ isDownloading ? 'Bezig...' : 'Download als PDF' }}
    </button>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue';
import { usePageFrontmatter } from 'vuepress/client';

const frontmatter = usePageFrontmatter();
const isDownloading = ref(false);

// Show button unless explicitly disabled in frontmatter
const showDownloadButton = computed(() => {
    return frontmatter.value.pdfdownload !== false;
});

const downloadPDF = async () => {
    if (isDownloading.value) return;
    isDownloading.value = true;

    try {
        const html2pdfModule = await import('html2pdf.js');
        const html2pdf = html2pdfModule.default;

        // Get content and footer
        const contentArea = document.querySelector('main.vp-page');
        const footer = document.querySelector('.article-footer');

        if (!contentArea) {
            alert('Kan content niet vinden');
            return;
        }

        // Open all <details> elements
        const detailsElements = contentArea.querySelectorAll('details');
        detailsElements.forEach(details => {
            details.setAttribute('open', '');
        });

        // Find all tab components and activate each tab
        const tabGroups = contentArea.querySelectorAll('.vp-tabs, [class*="tab"]');

        for (const tabGroup of tabGroups) {
            const tabs = tabGroup.querySelectorAll('[role="tab"], .tab-button, [class*="tab-nav"]');

            for (const tab of tabs) {
                tab.click();
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }

        await nextTick();

        // Create wrapper
        const wrapper = document.createElement('div');
        wrapper.style.background = 'white';
        wrapper.style.color = '#000';
        wrapper.style.padding = '20px';
        wrapper.style.width = '100%';
        wrapper.style.maxWidth = '800px';
        wrapper.style.margin = '0';

        // Clone content
        const contentClone = contentArea.cloneNode(true);

        // Remove unwanted elements
        contentClone.querySelectorAll(
            '.pdf-download-btn, .vp-page-nav, .page-nav, .vp-page-meta, .article-footer'
        ).forEach(el => el.remove());

        // Fix details elements in clone
        const clonedDetails = contentClone.querySelectorAll('details');
        clonedDetails.forEach(details => {
            details.setAttribute('open', '');
            details.style.marginBottom = '1.5rem';

            const summary = details.querySelector('summary');
            if (summary) {
                summary.style.fontWeight = 'bold';
                summary.style.marginBottom = '0.5rem';
                summary.style.cursor = 'default';
                summary.style.color = '#000';
            }
        });

        // Make all tab content visible
        const tabPanels = contentClone.querySelectorAll('[role="tabpanel"], .tab-panel, [class*="tab-content"]');
        tabPanels.forEach(panel => {
            panel.style.display = 'block';
            panel.style.opacity = '1';
            panel.style.visibility = 'visible';
            panel.removeAttribute('hidden');
            panel.style.marginBottom = '2rem';
            panel.style.paddingBottom = '2rem';
            panel.style.borderBottom = '1px solid #eee';
        });

        // Add tab titles
        const tabNavs = contentClone.querySelectorAll('[role="tab"], .tab-button');
        tabNavs.forEach((nav, index) => {
            const correspondingPanel = contentClone.querySelectorAll('[role="tabpanel"], .tab-panel')[index];
            if (correspondingPanel && nav.textContent) {
                const title = document.createElement('h3');
                title.textContent = nav.textContent.trim();
                title.style.marginTop = index === 0 ? '0' : '2rem';
                title.style.color = '#3eaf7c';
                correspondingPanel.insertBefore(title, correspondingPanel.firstChild);
            }
        });

        // Reset positioning
        const allElements = contentClone.querySelectorAll('*');
        allElements.forEach(el => {
            const computed = window.getComputedStyle(el);
            if (computed.position === 'absolute' || computed.position === 'fixed') {
                el.style.position = 'relative';
                el.style.left = '0';
                el.style.right = '0';
                el.style.top = '0';
            }
            if (computed.transform && computed.transform !== 'none') {
                el.style.transform = 'none';
            }
        });

        contentClone.style.margin = '0';
        contentClone.style.padding = '0';
        contentClone.style.transform = 'none';
        contentClone.style.position = 'relative';
        contentClone.style.left = '0';
        contentClone.style.right = '0';

        // Fix text colors
        contentClone.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, td, th, span, div, a, strong, b, em').forEach(el => {
            if (!el.style.color) {
                el.style.color = '#000';
            }
        });

        // Specifically target bold elements
        contentClone.querySelectorAll('strong, b').forEach(el => {
            el.style.color = '#000';
            el.style.fontWeight = 'bold';
        });

        wrapper.appendChild(contentClone);

        // Add footer
        if (footer) {
            const footerClone = footer.cloneNode(true);
            footerClone.style.marginTop = '3rem';
            footerClone.style.paddingTop = '1rem';
            footerClone.style.borderTop = '1px solid #ddd';
            footerClone.style.color = '#666';
            wrapper.appendChild(footerClone);
        }

        // Replace content temporarily
        const parent = contentArea.parentNode;
        parent.insertBefore(wrapper, contentArea);
        contentArea.style.display = 'none';

        await nextTick();
        await new Promise(resolve => setTimeout(resolve, 300));

        window.scrollTo(0, 0);
        await new Promise(resolve => setTimeout(resolve, 100));

        const opt = {
            margin: 10,
            filename: `${frontmatter.value.title || 'document'}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                backgroundColor: '#ffffff',
                windowWidth: wrapper.scrollWidth,
                windowHeight: wrapper.scrollHeight
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait'
            }
        };

        await html2pdf().set(opt).from(wrapper).save();

        console.log('PDF generated!');

        // Restore
        parent.removeChild(wrapper);
        contentArea.style.display = '';

    } catch (error) {
        console.error('PDF Error:', error);
        alert('Fout: ' + error.message);
    } finally {
        isDownloading.value = false;
    }
};
</script>

<style scoped>
.pdf-download-btn {
    padding: 8px 16px;
    background: #3eaf7c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
    margin: 1rem 0;
    display: block;
    margin-left: auto;
}

.pdf-download-btn:hover:not(:disabled) {
    background: #4abf8a;
}

.pdf-download-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
</style>