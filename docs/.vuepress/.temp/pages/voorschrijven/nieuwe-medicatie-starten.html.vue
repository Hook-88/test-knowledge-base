<template><div><h1 id="nieuwe-medicatie-starten" tabindex="-1"><a class="header-anchor" href="#nieuwe-medicatie-starten"><span>Nieuwe medicatie starten</span></a></h1>
<p>In de status wordt de knop <strong>Nieuw</strong> weergegeven. Hiermee start u met het voorschrijven van nieuwe medicatie.
<img src="/images/nieuwe-medicatie-starten/status-pijl-naar-nieuw.png" alt="Status - Pijl naar nieuw"></p>
<h2 id="zoeken-medicatie" tabindex="-1"><a class="header-anchor" href="#zoeken-medicatie"><span>Zoeken medicatie</span></a></h2>
<p>In het scherm dat wordt getoond, zoekt u naar de medicatie. U kunt zoeken op deel van het geneesmiddelnaam bijvoorbeeld: <strong>Allo 300</strong>.
<img src="/images/nieuwe-medicatie-starten/zoeken-medicatie.png" alt="Zoeken naar medicatie"></p>
<p>Standaard zoekt u in het vigerende formularium. Kunt u daarin de medicatie niet vinden? Gebruik dan <strong>In hele taxe zoeken</strong>.</p>
<p>Klik op de medicatie om deze te selecteren. U krijgt daarna een scherm te zien waar u de dosering kunt opgeven.
<img src="/images/nieuwe-medicatie-starten/opgeven-dosering-regulier.png" alt="Opgeven dosering"></p>
<h2 id="dosering-opgeven" tabindex="-1"><a class="header-anchor" href="#dosering-opgeven"><span>Dosering opgeven</span></a></h2>
<p>De dosering is vooringevuld vanuit het formularium. U kunt deze dosering desgewenst aanpassen. Heeft u de medicatie uit de hele taxe geselecteerd, dan wordt de dosering van de G-standaard overgenomen.</p>
<p>U kunt de dosering opgeven in veschillende weergaves. Deze zijn:</p>
<ul>
<li><RouteLink to="/voorschrijven/dosering-aanpassen.html">Regulier</RouteLink></li>
<li><RouteLink to="/voorschrijven/dosering-aanpassen-uitgebreid.html">Uitgebreid</RouteLink> (voor afwijken van standaard toedientijden en extra opties).</li>
<li><RouteLink to="/voorschrijven/dosering-aanpassen-schema.html">Schema</RouteLink> (voor bijvoorbeeld een op- of afbouwschema).</li>
<li>Handmatig (om per dag (en tijd) een dosering op te geven).</li>
</ul>
<details>
<summary><strong>👉 Geneesmiddelinformatie (F.K.)</strong></summary>
<p>Achter de geneesmiddelnaam wordt een icon van het Farmacotherapeutisch Kompas getoond. Dit is een link naar de pagina van het F.K. betreffende het geneesmiddel.</p>
<img src="/images/nieuwe-medicatie-starten/link-fk.png" alt="Link naar Farmacotherapeutisch kompas" />
</details>
<h2 id="extra-doseerinformatie-toevoegen" tabindex="-1"><a class="header-anchor" href="#extra-doseerinformatie-toevoegen"><span>Extra doseerinformatie toevoegen</span></a></h2>
<p>De extra doseerinformatie wordt onder andere getoond op de toedienregistratie. Hier kunt u extra toelichting geven op het toedienen van de medicatie. Bijvoorbeeld: <em>Innemen na de maaltijd</em>.
<img src="/images/nieuwe-medicatie-starten/weergave-regulier-extra-doseerinformatie.png" alt="Extra doseerinformatie"></p>
<h2 id="reden-van-voorschrijven-selecteren" tabindex="-1"><a class="header-anchor" href="#reden-van-voorschrijven-selecteren"><span>Reden van voorschrijven selecteren</span></a></h2>
<p>Hier geeft u de reden van voorschrijven op. U heeft hierbij keuze uit episodes uit de landelijke episodelijst. Deze episodes kunnen worden gebruikt in de medicatiebewaking. Ook kan in een aantal gevallen een reden van voorschrijven worden afgedwongen, bijvoorbeeld omdat de medicatie niet in het formularium zit.
<img src="/images/nieuwe-medicatie-starten/weergave-regulier-reden-van-voorschrijven.png" alt="Reden van voorschrijven"></p>
<h2 id="medicatiebewaking-afhandelen" tabindex="-1"><a class="header-anchor" href="#medicatiebewaking-afhandelen"><span>Medicatiebewaking afhandelen</span></a></h2>
<p>Aan de rechterzijde wordt <strong>Medicatiebewaking</strong> getoond. Deze bestaan uit informatieve- en verplicht-af-te-handelen signalen. U kunt klikken op het signaal voor extra opties. Daar kunt u extra info nagaan, en een bericht of notitie maken.</p>
<Tabs :data='[{"id":"Tabblad info"},{"id":"Tabblad notities"},{"id":"Tabblad berichten"}]'>
<template #title0="{ value, isActive }">Tabblad info</template>
<template #title1="{ value, isActive }">Tabblad notities</template>
<template #title2="{ value, isActive }">Tabblad berichten</template>
<template #tab0="{ value, isActive }">
<p><img src="/images/nieuwe-medicatie-starten/medicatie-bw-tabblad-info.png" alt="Medicatiebewaking tabblad info"></p>
</template>
<template #tab1="{ value, isActive }">
<p><img src="/images/nieuwe-medicatie-starten/medicatie-bw-tabblad-notities.png" alt="Medicatiebewaking tabblad info"></p>
</template>
<template #tab2="{ value, isActive }">
<p><img src="/images/nieuwe-medicatie-starten/medicatie-bw-tabblad-berichten.png" alt="Medicatiebewaking tabblad berichten"></p>
</template>
</Tabs>
<h3 id="verplicht-af-te-handelen-signalen" tabindex="-1"><a class="header-anchor" href="#verplicht-af-te-handelen-signalen"><span>Verplicht-af-te-handelen signalen</span></a></h3>
<p>De verplicht-af-te-handelen signalen herkent u aan het sterretje(*). Deze signalen dient u af te vinken voordat u de nieuwe medicatie kunt invoeren.</p>
<Tabs :data='[{"id":"Signaal verplicht om af te handelen"},{"id":"Signaal informatief"}]'>
<template #title0="{ value, isActive }">Signaal verplicht om af te handelen</template>
<template #title1="{ value, isActive }">Signaal informatief</template>
<template #tab0="{ value, isActive }">
<p><img src="/images/nieuwe-medicatie-starten/medicatiebw-verplicht-omlijnd.png" alt="Medicatiebewakingsignaal verplicht af te handelen"></p>
</template>
<template #tab1="{ value, isActive }">
<p><img src="/images/nieuwe-medicatie-starten/medicatiebw-niet-verplicht-omlijnd.png" alt="Medicatiebewakingsignaal informatief"></p>
</template>
</Tabs>
<h2 id="start-per-opgeven" tabindex="-1"><a class="header-anchor" href="#start-per-opgeven"><span>Start per opgeven</span></a></h2>
<p>Onder de dosering wordt een vlak weergeven om de <strong>start per</strong> op te geven. Deze datum en tijd zijn vooringevuld vanuit het formularium. Schrijft u uit de hele taxe voor, dan worden er andere instellingen gebruikt om <strong>start per</strong> te bepalen. Met <strong>nu</strong>, <strong>vandaag</strong>, <strong>morgen</strong> en <strong>weekdoos</strong>. Kunt u de <strong>start per</strong> aanpassen. Ook kunt u klikken in het veld om handmatig een datum en tijd in te voeren.</p>
<p><img src="/images/nieuwe-medicatie-starten/start-per-omlijnd.png" alt="Start per opgeven"></p>
<details>
<summary><strong>👉 Stop per (tijdelijke medicatie)</strong></summary>
<p>U kunt ook en kuur voorschrijven. In dat geval wordt ook om een <string>Stop per</string> gevraagd.</p>
-- deze afbeelding nog toevoegen --
</details>
<h2 id="toevoegen-opmerking-optioneel" tabindex="-1"><a class="header-anchor" href="#toevoegen-opmerking-optioneel"><span>Toevoegen opmerking (optioneel)</span></a></h2>
<p>Onder de <strong>start per</strong> kunt u een opmerking toevoegen. Deze opmerking wordt getoond aan de apotheek tijden het autoriseren.</p>
<h2 id="invoer-starten" tabindex="-1"><a class="header-anchor" href="#invoer-starten"><span>Invoer starten</span></a></h2>
<p>Onderin wordt de knop <strong>Start</strong> weergegeven. Hiermee gaat u naar een bevestigingscherm waar u de invoer controleert. Dit scherm wordt in Medimo het overzicht <strong>Medicatiebehandeling</strong> genoemd. Hier kunt u de invoer nog corrigeren/annuleren, aanvullende stop/wijziging toevoegen of een <strong>nieuwe medicatieafspraak</strong> maken.</p>
<p><img src="/images/nieuwe-medicatie-starten/overzicht-medicatiebehandeling.png" alt="Overzicht medicatiebehandeling"></p>
<h2 id="invoer-opslaan" tabindex="-1"><a class="header-anchor" href="#invoer-opslaan"><span>Invoer opslaan</span></a></h2>
<p>Klik tot slot op <strong>Opslaan</strong> om de nieuwe medicatie in te voeren. U keert daarna terug in de status waar de nieuwe medicatie wordt getoond.</p>
</div></template>


