<template><div><h1 id="dosering-aanpassen-regulier" tabindex="-1"><a class="header-anchor" href="#dosering-aanpassen-regulier"><span>Dosering aanpassen - Regulier</span></a></h1>
<p>In de weergave regulier geeft u per standaard toedientijd een dosering op. U doet dat in een scherm waar de afbeelding hieronder een voorbeeld toont.
<img src="/images/nieuwe-medicatie-starten/weergave-regulier/weergave-regulier.png" alt="Weergave regulier"></p>
<p>Hieronder volgt een toelichting op wat er wordt getoond.</p>
<h2 id="toedientijden" tabindex="-1"><a class="header-anchor" href="#toedientijden"><span>Toedientijden</span></a></h2>
<p>Hier geeft u per (standaard)toedientijd de dosering op. Deze tijden worden per afdeling door uw zorginstelling ingesteld. U kunt hier hele getallen, decimalen en X (bijvoorbeeld bij aanbrengen) gebruiken.
<img src="/images/nieuwe-medicatie-starten/weergave-regulier/weergave-regulier-tt-omlijnd.png" alt="Weergave regulier"></p>
<h2 id="toedieneenheid" tabindex="-1"><a class="header-anchor" href="#toedieneenheid"><span>Toedieneenheid</span></a></h2>
<p>Ook wordt hier de toedieneenheid getoond. Deze kunt u desgewenst aanpassen.
<img src="/images/nieuwe-medicatie-starten/weergave-regulier/weergave-regulier-te-omlijnd.png" alt="Weergave regulier"></p>
<h2 id="interval" tabindex="-1"><a class="header-anchor" href="#interval"><span>Interval</span></a></h2>
<p>Rechts van de toedieneenheid wordt het interval getoond. Als u hierop klikt kunt u typen om te zoeken naar een interval.
<img src="/images/nieuwe-medicatie-starten/weergave-regulier/weergave-regulier-ti-omlijnd.png" alt="Weergave regulier">
Er zijn twee typen intervallen:</p>
<ul>
<li>Interval met specifieke weekdag (bijv. 1x per week op maandag).</li>
<li>Interval zonder specifieke weekdag (bijv. 1x per 10 dagen).</li>
</ul>
<p>Voor het interval zonder specifieke weekdag wordt de start per gebruikt om de toedienmomenten te bepalen.</p>
<h2 id="gebruik-continu-tijdelijk-en-zo-nodig" tabindex="-1"><a class="header-anchor" href="#gebruik-continu-tijdelijk-en-zo-nodig"><span>Gebruik (continu, tijdelijk en zo nodig)</span></a></h2>
<p>Onder de toedientijden kiest u voor een continu of tijdelijk gebruik. Kiest u hier tijdelijk, dan wordt er gevraagd om een stop per op te geven. Daarnaast kunt u de medicatie markeren als <strong>Zo nodig</strong>. Dit kan voor continu en tijdelijk gebruik,</p>
<Tabs :data='[{"id":"Gebruik"},{"id":"Gebruik tijdelijk"},{"id":"Gebruik zo nodig"}]'>
<template #title0="{ value, isActive }">Gebruik</template>
<template #title1="{ value, isActive }">Gebruik tijdelijk</template>
<template #title2="{ value, isActive }">Gebruik zo nodig</template>
<template #tab0="{ value, isActive }">
<p><img src="/images/nieuwe-medicatie-starten/weergave-regulier/weergave-regulier-gebruik-omlijnd.png" alt="Medicatiebewakingsignaal verplicht af te handelen"></p>
</template>
<template #tab1="{ value, isActive }">
<p><img src="/images/nieuwe-medicatie-starten/weergave-regulier/weergave-regulier-tijdelijk-stop-per-omlijnd.png" alt="Weergave regulier"></p>
</template>
<template #tab2="{ value, isActive }">
<p><img src="/images/nieuwe-medicatie-starten/weergave-regulier/weergave-regulier-zonodig.png" alt="Weergave regulier"></p>
</template>
</Tabs>
<h2 id="hoeveelheid" tabindex="-1"><a class="header-anchor" href="#hoeveelheid"><span>Hoeveelheid</span></a></h2>
<p>Hier geeft u het aantal op dat u wilt aanvragen bij de apotheek. Schrijft u een tijdelijk gebruik voor, dan rekent, mits berekendbaar, Medimo hier het totale aantal van de kuur uit. Ditzelfde geldt voor het opgeven van het totaal aantal stuks van de kuur om de eindatum te berekenen.
<img src="/images/nieuwe-medicatie-starten/weergave-regulier/weergave-regulier-tijdelijk-bewerkt.png" alt="Weergave regulier"></p>
<h2 id="medicatie-invoeren" tabindex="-1"><a class="header-anchor" href="#medicatie-invoeren"><span>Medicatie invoeren</span></a></h2>
<p>Nadat u de dosering hebt opgegeven kunt u verder met het invoeren van de doseerinstructies, zoals het invoeren van <RouteLink to="/voorschrijven/nieuwe-medicatie-starten.html#extra-doseerinformatie-toevoegen">Extra doseerinformatie</RouteLink> en het opgeven van een <RouteLink to="/voorschrijven/nieuwe-medicatie-starten.html#reden-van-voorschrijven-selecteren">Reden van voorschrijven</RouteLink>.</p>
</div></template>


