<template><div><h1 id="overzicht-van-de-status" tabindex="-1"><a class="header-anchor" href="#overzicht-van-de-status"><span>Overzicht van de status</span></a></h1>
<p>Hieronder volgt een toelichting op wat er wordt getoond in de status.</p>
<h2 id="clientgegevens" tabindex="-1"><a class="header-anchor" href="#clientgegevens"><span>Cliëntgegevens</span></a></h2>
<p>In de status worden bovenin de cliëntgegevens getoond. Daarnaast worden hier ook tags weergegeven voor BSN en BEM-toewijzigen.</p>
<Tabs :data='[{"id":"Cliëntgegevens in status"},{"id":"Tag Tromb"}]'>
<template #title0="{ value, isActive }">Cliëntgegevens in status</template>
<template #title1="{ value, isActive }">Tag Tromb</template>
<template #tab0="{ value, isActive }">
<p><img src="/images/status-overzicht-clientgegevens.png" alt="Cliëntgegevens in de Status"></p>
</template>
<template #tab1="{ value, isActive }">
<p><img src="/images/status-tag-tromb.png" alt="Tag voor trombosedienst"></p>
</template>
</Tabs>
<h3 id="berichten-acties-en-meetwaarden" tabindex="-1"><a class="header-anchor" href="#berichten-acties-en-meetwaarden"><span>Berichten, acties en meetwaarden</span></a></h3>
<p>Aan de rechterzijde worden links weergegeven om berichten, acties en meetwaarden te openen.</p>
<h3 id="status-kopieren" tabindex="-1"><a class="header-anchor" href="#status-kopieren"><span>Status kopiëren</span></a></h3>
<p>Ook wordt bovenin de link <strong>Medicatie</strong> weergegeven. Hiermee kopieert u de status die u in een ander document kunt plakken.</p>
<p><img src="/images/status-overzicht-clientgegevens-medicatie-omlijnd.png" alt="Cliëntgegevens - Kopieer medicatie omlijnd"></p>
<!-- <details>
<summary><h2>Status kopiëren</h2></summary>
<p>This is the hidden content that will appear when the user clicks 'Show More'.</p>
<ul>
<li>More details here</li>
</ul>
</details> -->
<h2 id="actuele-medicatie" tabindex="-1"><a class="header-anchor" href="#actuele-medicatie"><span>Actuele medicatie</span></a></h2>
<p>Onder de cliëntgegevens wordt de actuele medicatie getoond in specifieke weergave getoond. Deze is sorteerbaar. Ook kunt u desgewenst deze weergave aanpassen. Gerbuik daarvoor het pil-icoon dat links bovenin wordt getoond. U heeft keuze uit vier weergaves.</p>
<Tabs :data='[{"id":"Weergave Klassiek"},{"id":"Weergave Schema"},{"id":"Weergave Bijzonderheden"},{"id":"Weergave Verstrekkingen"}]'>
<template #title0="{ value, isActive }">Weergave Klassiek</template>
<template #title1="{ value, isActive }">Weergave Schema</template>
<template #title2="{ value, isActive }">Weergave Bijzonderheden</template>
<template #title3="{ value, isActive }">Weergave Verstrekkingen</template>
<template #tab0="{ value, isActive }">
<p><img src="/images/status-weergave-klassiek.png" alt="Status weergave - Ingang en stop per"></p>
</template>
<template #tab1="{ value, isActive }">
<p><img src="/images/status-weergave-schema.png" alt="Status weergave - Schema"></p>
</template>
<template #tab2="{ value, isActive }">
<p><img src="/images/status-weergave-bijzonerheden.png" alt="Status weergave - Bijzonderheden"></p>
</template>
<template #tab3="{ value, isActive }">
<p><img src="/images/status-weergave-verstrekkingen.png" alt="Status weergave - Verstrekkingen"></p>
</template>
</Tabs>
<h2 id="knoppen-in-status" tabindex="-1"><a class="header-anchor" href="#knoppen-in-status"><span>Knoppen in status</span></a></h2>
<p>Onderaan de status worden verschillende knoppen weergegeven. Hiermee kunt u bijvoorbeeld starten met nieuwe medicatie of de toedienregistratie openen. Ook hebben de knoppen een submenu. Hiermee kunt u gebruik maken van extra opties.</p>
<Tabs :data='[{"id":"Knoppen in Status"},{"id":"Submenu knop nieuw open"}]'>
<template #title0="{ value, isActive }">Knoppen in Status</template>
<template #title1="{ value, isActive }">Submenu knop nieuw open</template>
<template #tab0="{ value, isActive }">
<p><img src="/images/status-knoppen-omlijnd.png" alt="Knoppen in status omlijnd"></p>
</template>
<template #tab1="{ value, isActive }">
<p><img src="/images/status-submenu-nieuw-open.png" alt="Submenu knop Nieuw open"></p>
</template>
</Tabs>
</div></template>


