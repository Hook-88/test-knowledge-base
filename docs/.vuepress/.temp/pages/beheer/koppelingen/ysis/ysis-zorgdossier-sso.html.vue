<template><div><p>Deze handleiding beschrijft hoe Ysis Zorgdossier kan worden gekoppeld aan Medimo met behulp van OpenID Connect (OIDC) en hoe gebruikers via deze koppeling kunnen inloggen. Tevens wordt uitgelegd hoe Functioneel Applicatiebeheerders (FAB) groepen uit Ysis Zorgdossier kunnen koppelen aan beveiligingsgroepen binnen MEdimo om de rechten van gebruikers te beheren.</p>
<h2 id="doel-van-de-ysis-koppeling" tabindex="-1"><a class="header-anchor" href="#doel-van-de-ysis-koppeling"><span>Doel van de Ysis-koppeling:</span></a></h2>
<p>De OIDC-koppeling met Ysis Zorgdossier biedt diverse voordelen:</p>
<ul>
<li><strong>Single Sign-On (SSO):</strong> Gebruikers hoeven slechts één keer in te loggen bij Ysis en krijgen dan direct toegang tot Medimo.</li>
<li><strong>Centralisatie van authenticatie:</strong> Beheer van gebruikers en authenticatie blijft primair in Ysis Zorgdossier.</li>
</ul>
<h3 id="voor-wie-is-deze-handleiding" tabindex="-1"><a class="header-anchor" href="#voor-wie-is-deze-handleiding"><span>Voor wie is deze handleiding?</span></a></h3>
<ul>
<li><strong>Functioneel Applicatiebeheerders (FAB):</strong> Voor het configureren en beheren van de Ysis-koppelingen en groepsmapping.</li>
<li><strong>Eindgebruikers:</strong> Voor het begrijpen van het inlogproces via Ysis Zorgdossier.</li>
</ul>
<h2 id="voorbereiding" tabindex="-1"><a class="header-anchor" href="#voorbereiding"><span>Voorbereiding</span></a></h2>
<p>Om gebruik te kunnen maken van de SSO-koppeling, dient deze te zijn geconfigureerd in Medimo en Ysis Zorgdossier. Hiervoor moeten gegevens worden uitgewisseld.</p>
<h3 id="koppeling-configureren-koppelvlak" tabindex="-1"><a class="header-anchor" href="#koppeling-configureren-koppelvlak"><span>Koppeling configureren (koppelvlak)</span></a></h3>
<p>In Medimo wordt per klant voor acceptatie en productie een koppelvlak ingericht. Dit koppelvlak wordt gebruikt om de geldigheid van de koppeling te valideren. De Medimo helpdesk maakt het koppelvlak aan en configureert die. De helpdesk heeft hiervoor de volgende gegevens nodig:</p>
<ul>
<li><strong>OpenId-Connect identity provider:</strong> Dit is de url die wordt gebruikt om de identiteit van de gebruiker na te gaan.</li>
<li><strong>OpenId Client/Application Id:</strong> Dit is het ID die Medimo gebruikt om zich te identificeren bij Ysis.</li>
<li><strong>OpenId Client/Application Secret:</strong> Dit secret wordt samen met het ID gebruikt om de toegang te krijgen tot het identificatiesysteem van Ysis Zorgdossier.</li>
</ul>
<p>Tijdens implementatie worden deze gegevens uitgewisseld.</p>
<p>Voor het configureren van de koppeling in Ysis Zorgdossier kunt u de documentatie van Gerimedica raadplegen.</p>
<p>Pas als de koppeling in beide systemen correct is geconfigureerd, is die technisch gereed en kan de <a href="#koppelvlaktabel-open-id-beveiligingsgroepen">Koppelvlaktabel OpenId Beveiligingsgroep</a> in Medimo worden ingericht.</p>
<h2 id="proces" tabindex="-1"><a class="header-anchor" href="#proces"><span>Proces</span></a></h2>
<p>Dit hoofdstuk beschrijft het pad dat een gebruiker volgt wanneer deze inlogt in Medimo via Ysis Zorgdossier.</p>
<h3 id="algemene-flow" tabindex="-1"><a class="header-anchor" href="#algemene-flow"><span>Algemene flow</span></a></h3>
<p>Dit hoofdstuk beschrijft het proces dat een gebruiker doorloopt wanneer deze inlogt in Medimo via Ysis Zorgdossier, en welke controles op de achtergrond plaatsvinden om een veilige en correcte toegang te garanderen.</p>
<h4 id="sso-starten" tabindex="-1"><a class="header-anchor" href="#sso-starten"><span>SSO starten</span></a></h4>
<p>De gebruiker start de SSO met een daarvoor speciaal geconfigureerde knop in Ysis Zorgdossier. Hiermee vindt er een reeks gestandaardiseerde OpenID Connect-stappen plaats. Hierbij wordt de authenticiteit van zowel de gebruiker als Medimo gecontroleerd. Daarvoor wordt het koppelvlak dat in Medimo is ingericht gebruikt. Op het moment dat gegevens niet overeenkomen wordt de toegang tot Medimo voor de gebruiker geweigerd.</p>
<h4 id="koppelvlaktabel-openid-connect-nagaan" tabindex="-1"><a class="header-anchor" href="#koppelvlaktabel-openid-connect-nagaan"><span>Koppelvlaktabel OpenId-connect nagaan</span></a></h4>
<p>In Medimo worden Ysis Zorgdossier locaties gekoppeld in de koppelvlaktabel OpenId-connect Beveiligingsgroep aan beveiligingsgroepen. Aan deze beveiligingsgroepen zijn permissies toegevoegd, die bepalen wat de gebruiker kan in Medimo.</p>
<p>Medimo krijgt van Ysis Zorgdossier door tot welke locaties de gebruiker gemachtigd is in Ysis zorgdossier. Deze locaties worden opgezocht in de koppelvlaktabel, en wordt nagegaan aan welke beveiligingsgroepen die zijn gekoppeld. De permissies die zijn toegevoegd aan de beveiligingsgroepen worden toegekend aan de gebruiker.</p>
<p>Ysis locaties die niet zijn gekoppeld wordt genegeerd. Is geen enkele locatie van de gebruiker gekoppeld, dan worden er geen permissies toegekend en kan de gebruiker geen werkzaamheden uitvoeren.</p>
<h4 id="gebruiker-inloggen" tabindex="-1"><a class="header-anchor" href="#gebruiker-inloggen"><span>Gebruiker inloggen</span></a></h4>
<p>Als eenmaal bekend is welke permissies moeten worden toegekend aan de gebruiker wordt de gebruiker ingelogd. Hierdoor krijgt die dan bijvoorbeeld de status, toedienregistratie of het hoofdmenu te zien. Dit wordt bepaald door de meegestuurde viewparameter (<a href="https://portaal.medimo.nl/portal/nl/kb/articles/beschrijving-van-deeplinking" target="_blank" rel="noopener noreferrer">deeplinking</a>).</p>
<h2 id="koppelvlaktabel-open-id-beveiligingsgroepen" tabindex="-1"><a class="header-anchor" href="#koppelvlaktabel-open-id-beveiligingsgroepen"><span>Koppelvlaktabel Open-Id beveiligingsgroepen</span></a></h2>
<p>De koppelvlaktabel Open-Id beveiliginsgroep wordt gebruikt om te bepalen welke permissies de gebruiker ontvangt (zie hoofdstuk Koppelvlaktabel OpenId-connect nagaan). De functioneel applicatiebeheerder dient in deze tabel de Ysis Zorgdossier locaties te koppelen aan de Medimo beveiligingsgroepen.</p>
<h3 id="nieuwe-ysis-zorgdossier-locatie-koppelen" tabindex="-1"><a class="header-anchor" href="#nieuwe-ysis-zorgdossier-locatie-koppelen"><span>Nieuwe Ysis Zorgdossier locatie koppelen</span></a></h3>
<p>Als er een onbekende Ysis Zorgdossier locatie wordt doorgegeven, voegt Medimo automatisch een nieuwe regel toe aan de koppelvlaktabel. Is het een locatie die geen gebruikt maakt van Medimo, dan hoeft u niks te doen. Niet gekoppelde locaties worden genegeerd.</p>
<p>Gaat de locatie wel met Medimo werken, dan dient deze aan de juiste beveiligingsgroep te worden gekoppeld. Dit kan op de volgende wijze:</p>
<ol>
<li>Open de koppelvlaktabel Open-Id beveiligingsgroepen.</li>
<li>Zoek de nieuwe regel op en open deze.</li>
<li>Selecteer de juiste beveiligingsgroep.</li>
<li>Sla de wijziging op.</li>
</ol>
<h2 id="foutmeldingen" tabindex="-1"><a class="header-anchor" href="#foutmeldingen"><span>Foutmeldingen</span></a></h2>
<p>Treedt er een fout op in de koppeling, dan kan de toegang (deels) worden geweigerd. Deze fout dient te worden opgelost voordat de gebruiker volledig toegang krijgt tot Medimo.</p>
<p>Van deze fout wordt een foutmeldingen gegenereerd. Deze melding is na te gaan in de log single-sign-on. Ook wordt hiervan een e-mail verstuurd naar het ingestelde notify adres in het koppelvlak.</p>
<p>Hieronder een overzicht van foutmeldingen en de toelichting daarop.</p>
<h3 id="geen-beveiligingsgroepen-gevonden" tabindex="-1"><a class="header-anchor" href="#geen-beveiligingsgroepen-gevonden"><span>Geen beveiligingsgroepen gevonden</span></a></h3>
<p>Om de permissies van de gebruiker te bepalen, worden Ysis Zorgdossiers locaties gebruikt. <a href="#koppelvlaktabel-openid-connect-nagaan">Deze locaties zijn gekoppeld aan Medimo beveiligingsgroepen</a>.</p>
<p>Locaties die niet zijn gekoppeld worden genegeerd. Is er geen enkele locatie gekoppeld, dan wordt deze foutmelding gegenereerd. Deze foutmelding kan twee oorzaken hebben:</p>
<ul>
<li>Er zijn locaties die moeten worden gekoppeld.</li>
<li>Gebruiker beschikt niet over de juiste permissies in Ysis Zorgdossier.</li>
</ul>
<h4 id="geen-beveiligingsgroepen-gevonden-troubleshoot" tabindex="-1"><a class="header-anchor" href="#geen-beveiligingsgroepen-gevonden-troubleshoot"><span>Geen beveiligingsgroepen gevonden - Troubleshoot</span></a></h4>
<ol>
<li>
<p>Open de log single-sign-on.</p>
<ul>
<li>Bijvoorbeeld via Beer &gt; Logs &gt; Log single-sign-on.</li>
</ul>
</li>
<li>
<p>Zoek de foutmelding op en open deze. Hier wordt getoond welke data is uitgewisseld.</p>
</li>
<li>
<p>In de log worden aan de linkerzijde nummers weergegeven. Bij nummer 6 kun je de ID's van de locaties uit Ysis Zorgdossier nagaan. Deze ID's kunt u opzoeken in de koppelvlaktabel Open-Id-Connect en zo nodig koppelen. Zijn het locaties die geen gebruik maken van Medimo, dan dienen de permissies/rechten in Ysis Zorgdossier te worden aangepast.</p>
</li>
</ol>
<h4 id="geen-permissies-gevonden-troubleshoot" tabindex="-1"><a class="header-anchor" href="#geen-permissies-gevonden-troubleshoot"><span>Geen permissies gevonden - Troubleshoot</span></a></h4>
<ol>
<li>
<p>Open de log single-sign-on.</p>
<ul>
<li>Bijvoorbeeld via Beer &gt; Logs &gt; Log single-sign-on.</li>
</ul>
</li>
<li>
<p>Zoek de foutmelding op en open deze. Hier wordt getoond welke data is uitgewisseld.</p>
</li>
<li>
<p>In de log worden aan de linkerzijde nummers weergegeven. Bij nummer 6 kun je de ID's van de locaties uit Ysis Zorgdossier nagaan. Deze ID's kunt u opzoeken in de koppelvlaktabel Open-Id-Connect en nagaan hoe die zijn gekoppeld.</p>
</li>
</ol>
<p>Mogelijk is de verkeerde beveiligingsgroep gekoppeld. Koppel in dat geval de juiste beveiligingsgroep en vraag de gebruiker opnieuw in te loggen.</p>
<p>Is de juiste beveiligingsgroep gekoppeld, dan heeft deze groep geen permissies. Deze dient u toe te voegen. U kunt vanuit de details van de gekoppelde regel, de gekoppelde beveiligingsgroep openen. Vanuit daar kunt u permissies toevoegen. Als alle benodigde permissies zijn toegevoegd, kunt u de gebruiker vragen een nieuwe inlogpoging te doen.</p>
</div></template>


