<template><div><h1 id="dosering-aanpassen-schema" tabindex="-1"><a class="header-anchor" href="#dosering-aanpassen-schema"><span>Dosering aanpassen - Schema</span></a></h1>
<p>In de weergave <strong>Schema</strong> kunt u per datum een tijd een andere dosering in laten gaan. Hiermee kunt u bijvoorbeeld een op- of afbouwschema invoeren. Ook kunt u gebruik maken van extra opties zoals die in de <RouteLink to="/voorschrijven/dosering-aanpassen-uitgebreid.html">weergave uitgebreid</RouteLink>.</p>
<h2 id="invoeren-schema" tabindex="-1"><a class="header-anchor" href="#invoeren-schema"><span>Invoeren schema</span></a></h2>
<p>Bij het maken van een schema dient u per wijziging in de dosering een nieuwe regel toe te voegen. Hierdoor weet Medimo per wanneer de dosering moet worden aangepast. Om een schema in te voeren kunt u de volgende stappen gebruiken.</p>
<h3 id="start-per-opgeven" tabindex="-1"><a class="header-anchor" href="#start-per-opgeven"><span>Start per opgeven</span></a></h3>
<p>Links wordt de <strong>Start per</strong> getoond. Deze is vooringevuld en kunt u desgewenst aanpassen.
<img src="/images/nieuwe-medicatie-starten/weergave-schema/weergave-schema-start-per-omlijnd.png" alt="Weergave schema"></p>
<h3 id="dosering-van-eerste-doseerregel-invoeren" tabindex="-1"><a class="header-anchor" href="#dosering-van-eerste-doseerregel-invoeren"><span>Dosering van eerste doseerregel invoeren</span></a></h3>
<p>Dit is de dosering van de eerste stap in het schema.
<img src="/images/nieuwe-medicatie-starten/weergave-schema/weergave-schema-toedientijden-omlijnd.png" alt="Weergave schema"></p>
<h3 id="regel-toevoegen" tabindex="-1"><a class="header-anchor" href="#regel-toevoegen"><span>Regel toevoegen</span></a></h3>
<p>Onder de doseerregel wordt <strong>Regel toevoegen</strong> getoond. Hiermee voegt u een nieuwe regel toe. U kunt ook de tabtoets gebruiken om tussen de doseervakje te navigeren. Gebruikt u tab in het laatste doseervakje, dan voegt u daarmee een nieuwe doseerregel toe.</p>
<Tabs :data='[{"id":"Nieuwe regel toevoegen"},{"id":"Nieuwe regel toegevoegd"}]'>
<template #title0="{ value, isActive }">Nieuwe regel toevoegen</template>
<template #title1="{ value, isActive }">Nieuwe regel toegevoegd</template>
<template #tab0="{ value, isActive }">
<p><img src="/images/nieuwe-medicatie-starten/weergave-schema/weergave-schema-regel-toevoegen-pijl.png" alt="Weergave schema"></p>
</template>
<template #tab1="{ value, isActive }">
<p><img src="/images/nieuwe-medicatie-starten/weergave-schema/weergave-schema-nieuwe-regel-omlijnd.png" alt="Weergave schema"></p>
</template>
</Tabs>
<h3 id="wijzig-per-opgeven" tabindex="-1"><a class="header-anchor" href="#wijzig-per-opgeven"><span>Wijzig per opgeven</span></a></h3>
<p>Links in de nieuwe doseerregel wordt de <strong>wijzig per</strong> weergegeven. Dit is de datum en tijd van ingang van de nieuwe stap. Klik daarop om die aan te passen.
<img src="/images/nieuwe-medicatie-starten/weergave-schema/weergave-schema-wijzig-per-omlijnd.png" alt="Weergave schema"></p>
<h3 id="dosering-invoeren" tabindex="-1"><a class="header-anchor" href="#dosering-invoeren"><span>Dosering invoeren</span></a></h3>
<p>Geef de dosering van de nieuwe stap op. Bestaat het schema uit meer stappen, voeg dan per stap een regel met een <strong>wijzig per</strong> en dosering toe.</p>
<Tabs :data='[{"id":"Nieuwe dosering"},{"id":"Volledig schema"}]'>
<template #title0="{ value, isActive }">Nieuwe dosering</template>
<template #title1="{ value, isActive }">Volledig schema</template>
<template #tab0="{ value, isActive }">
<p><img src="/images/nieuwe-medicatie-starten/weergave-schema/weergave-schema-nieuwe-dosering-omlijnd.png" alt="Weergave schema"></p>
</template>
<template #tab1="{ value, isActive }">
<p><img src="/images/nieuwe-medicatie-starten/weergave-schema/weergave-schema-compleet.png" alt="Weergave schema"></p>
</template>
</Tabs>
<p>Nadat u de dosering hebt opgegeven kunt u verder met het invoeren van de doseerinstructies, zoals het invoeren van <RouteLink to="/voorschrijven/nieuwe-medicatie-starten.html#extra-doseerinformatie-toevoegen">Extra doseerinformatie</RouteLink> en het opgeven van een <RouteLink to="/voorschrijven/nieuwe-medicatie-starten.html#reden-van-voorschrijven-selecteren">Reden van voorschrijven</RouteLink>.</p>
<p>Ook wordt <a href="#medicatiebewaking">Medicatiebewaking</a> toegepast en dient u die mogelijk af te handelen.</p>
<h3 id="invoer-starten" tabindex="-1"><a class="header-anchor" href="#invoer-starten"><span>Invoer starten</span></a></h3>
<p>Nadat u het schema hebt ingevoerd, kunt u die starten. U krijgt deze dan als concept te zien in het overzicht <strong>medicatiebehandeling</strong>. Indien nodig kunt u hier het schema corrigeren.
<img src="/images/nieuwe-medicatie-starten/weergave-schema/weergave-schema-concept-schema.png" alt="Overzicht medicatiebehandeling"></p>
<h3 id="invoer-opslaan" tabindex="-1"><a class="header-anchor" href="#invoer-opslaan"><span>Invoer opslaan</span></a></h3>
<p>Bent u akkoord met de invoer, dan kunt u die opslaan. Hiermee keert u terug naar de status waar het nieuwe schema wordt getoond.</p>
<h2 id="medicatiebewaking" tabindex="-1"><a class="header-anchor" href="#medicatiebewaking"><span>Medicatiebewaking</span></a></h2>
<p>Voor de medicatiebewaking geldt dat deze per doseerregel wordt uitgevoerd en dient te worden afgehandeld.</p>
<h2 id="invoeren-tijdelijk-schema" tabindex="-1"><a class="header-anchor" href="#invoeren-tijdelijk-schema"><span>Invoeren tijdelijk schema</span></a></h2>
<p>Met de stappen zoals hierboven beschreven voert u een continu schema in. U kunt ook een tijdelijk schema invoeren. Gebruik in dat geval <strong>Aanvullende stop</strong> in het overzicht <strong>medicatiebehandeling</strong>. U kunt dan de <strong>Stop per</strong> opgeven en daarna het schema inclusief de stop opslaan.</p>
<Tabs :data='[{"id":"Overzicht medicatiebehandeling"},{"id":"Opgeven Stop per"},{"id":"Schema met stop"}]'>
<template #title0="{ value, isActive }">Overzicht medicatiebehandeling</template>
<template #title1="{ value, isActive }">Opgeven Stop per</template>
<template #title2="{ value, isActive }">Schema met stop</template>
<template #tab0="{ value, isActive }">
<p><img src="/images/nieuwe-medicatie-starten/weergave-schema/weergave-schema-concept-schema-aanvullende-stop-pijl.png" alt="Overzicht medicatiebehandeling"></p>
</template>
<template #tab1="{ value, isActive }">
<p><img src="/images/nieuwe-medicatie-starten/weergave-schema/weergave-schema-aanvullende-stop-omlijnd.png" alt="Opgeven Stop per"></p>
</template>
<template #tab2="{ value, isActive }">
<p><img src="/images/nieuwe-medicatie-starten/weergave-schema/weergave-schema-concept-schema-met-stop.png" alt="Overzicht medicatiebehandeling"></p>
</template>
</Tabs>
<h2 id="toedientijd-aanpassen-toevoegen" tabindex="-1"><a class="header-anchor" href="#toedientijd-aanpassen-toevoegen"><span>Toedientijd aanpassen/toevoegen</span></a></h2>
<p>Net als in de weergave <strong>Uitgebreid</strong> kunt u afwijken van de standaard toedientijden. Klik daarvoor op de toedientijd die bovenaan het schema wordt getoond. Ook kunt u extra toedientijden toevoegen. Gebruik daarvoor het plusje dat onderin het schema wordt weergegeven. U kunt voor maximaal 6 verschillende toedientijden doseren.</p>
<p>voor maximaal 6 verschillende toedientijden doseren.</p>
<Tabs :data='[{"id":"Toedientijden aanpassen"},{"id":"Toedientijd toevoegen"}]'>
<template #title0="{ value, isActive }">Toedientijden aanpassen</template>
<template #title1="{ value, isActive }">Toedientijd toevoegen</template>
<template #tab0="{ value, isActive }">
<p><img src="/images/nieuwe-medicatie-starten/weergave-schema/weergave-schema-tijden-omlijnd.png" alt="toedientijden aanpassen"></p>
</template>
<template #tab1="{ value, isActive }">
<p><img src="/images/nieuwe-medicatie-starten/weergave-schema/weergave-schema-tijd-toevoegen-pijl.png" alt="toedientijd toevoegen"></p>
</template>
</Tabs>
<h2 id="extra-opties" tabindex="-1"><a class="header-anchor" href="#extra-opties"><span>Extra opties</span></a></h2>
<p>In de weergave <strong>Schema</strong> kunt u gebruik maken van dezelfde opties als in de weergave <RouteLink to="/voorschrijven/dosering-aanpassen-uitgebreid.html">Uitgebreid</RouteLink>. Deze zijn:</p>
<ul>
<li><RouteLink to="/voorschrijven/dosering-aanpassen-uitgebreid.html#toedienroute">Aanpassen toedienroute</RouteLink>.</li>
<li><RouteLink to="/voorschrijven/dosering-aanpassen-uitgebreid.html#andere-voorschrijver">Andere voorschrijver</RouteLink>.</li>
<li><RouteLink to="/voorschrijven/dosering-aanpassen-uitgebreid.html#extern-geleverd">Extern geleverd</RouteLink>.</li>
</ul>
</div></template>


