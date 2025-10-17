<template><div><h1 id="ysis-sso" tabindex="-1"><a class="header-anchor" href="#ysis-sso"><span>Ysis SSO</span></a></h1>
<p>Dit artikel beschrijft de werking van de reguliere Ysis SSO-koppeling. Gerimedica kan de URL van de inlog knop aanpassen zodat er gebruik wordt gemaakt van een OpenId-Connect SSO-koppeling. Voor het beheren van een OpenId-Connect SSO-koppeling kunt u artikel <a href="https://portaal.medimo.nl/portal/nl/kb/articles/beschrijving-van-de-openid-connect-koppeling" target="_blank" rel="noopener noreferrer">Beschrijving van de OpenId-Connect koppeling</a> raadplegen.</p>
<p>Het is <em>niet</em> mogelijk om beide SSO-methoden te gebruiken. Bepaal van te voren goed welke methode het beste past binnen uw organisatie.</p>
<h2 id="omschrijving" tabindex="-1"><a class="header-anchor" href="#omschrijving"><span>Omschrijving</span></a></h2>
<p>Een Single Sign-On (SSO) koppeling is een technologie waarmee een gebruiker zich slechts één keer hoeft aan te melden om toegang te krijgen tot meerdere applicaties of systemen. In plaats van zich apart aan te melden bij elke applicatie of systeem die hij of zij wil gebruiken, kan de gebruiker inloggen met één set aanmeldingsgegevens (bijvoorbeeld een gebruikersnaam en wachtwoord) en krijgt vervolgens naadloos toegang tot alle gekoppelde applicaties en systemen, zonder dat hij of zij opnieuw hoeft in te loggen.</p>
<h2 id="inrichting-ysis" tabindex="-1"><a class="header-anchor" href="#inrichting-ysis"><span>Inrichting Ysis</span></a></h2>
<p>Om gebruik te kunnen maken van de SSO-koppeling moet in Ysis een aantal zaken worden ingericht. Voor meer informatie daarover kunt u de documentatie van Gerimedica raadplegen.</p>
<h2 id="proces" tabindex="-1"><a class="header-anchor" href="#proces"><span>Proces</span></a></h2>
<p>De koppeling doorloopt onderstaande proces bij gebruik van de SSO-koppeling.</p>
<ol>
<li>
<p><strong>Gebruiker logt in</strong><br>
Hierbij wordt een klantspecifieke URL gebruikt. Hierdoor weet Medimo welk koppelvlak er moet worden nagegaan. Voor het valideren van de toegang tot Medimo wordt het volgende nagegaan:</p>
<ul>
<li><strong>Certificaat -</strong> Deze is uitgewisseld met Gerimedica. Komt het certificaat niet overeen met wat er is ingericht in het koppelvlak dan weigert Medimo de toegang.</li>
<li><strong>IP-adres -</strong> In het koppelvlak wordt aangegeven welke IP-adressen zijn vertrouwd (op de whitelist staan). Komt het verzoek van een ander IP-adres dan wordt de toegang geweigerd.</li>
</ul>
</li>
<li>
<p><strong>Koppeltabel SSO nagaan</strong><br>
Medimo gebruikt hiervoor het ID van het Ysis account om te zoeken in de 'Koppelvlaktabel single sign-on'. Dit kan tot het volgende leiden:</p>
<ul>
<li><strong>Het ID staat niet in de tabel -</strong> Medimo kan niet bepalen welke permissies er moeten worden toegekend en vraagt de gebruiker in te loggen met het Medimo account. Hiermee koppelt de gebruiker zelf het Ysis account aan het Medimo account. Medimo voegt daarmee een regel toe aan de 'Koppelvlaktabel single sign-on', met het nieuwe ID en het corresponderende Medimo account.</li>
<li><strong>Het ID staat wel in de tabel -</strong> Medimo gaat na wat het corresponderende Medimo account is en logt de eindgebruiker daarmee in. Medimo kan, afhankelijk van de koppelvlak opties, vragen om het inloggen te bevestigen middels het Medimo wachtwoord.</li>
</ul>
</li>
<li>
<p><strong>Permissies toekennen aan gebruiker</strong><br>
Nu het corresponderende Medimo account bekend is, krijgt de gebruiker de permissies toegekend aan het Medimo account.</p>
</li>
</ol>
<h3 id="wel-of-niet-tonen-van-client" tabindex="-1"><a class="header-anchor" href="#wel-of-niet-tonen-van-client"><span>Wel (of niet) tonen van cliënt</span></a></h3>
<p>Er kan op cliëntniveau gebruik gemaakt worden van de SSO-koppeling. Hiermee landt de gebruiker direct in de status van de cliënt in Medimo. Om te bepalen of Medimo de cliënt toont wordt het volgende nagegaan:</p>
<ol>
<li><strong>Is de cliënt bekend? -</strong> Medimo gebruikt hiervoor het ID van de cliënt in Ysis en zoekt een match in Medimo op het veld externe ID. Is er geen match, dan wordt er gezocht op BSN. Wordt daar ook geen match op gevonden, dan toont Medimo de foutmelding: &quot;Onbekende cliënt&quot;. Ondanks dat de cliënt niet wordt gevonden, kan de eindgebruiker wel inloggen op Medimo.</li>
<li><strong>Heeft de gebruiker in Medimo voldoende permissies voor de cliënt? -</strong> Zo niet, dan wordt de foutmelding &quot;onvoldoende rechten voor deze cliënt&quot; getoond. Ondanks dat de gebruiker geen permissies heeft voor de cliënt, kan de gebruiker wel inloggen op Medimo. Heeft de gebruiker wel voldoende permissies dan toont Medimo de status van de cliënt.</li>
</ol>
<h2 id="overige-functies-in-de-koppeling" tabindex="-1"><a class="header-anchor" href="#overige-functies-in-de-koppeling"><span>Overige functies in de koppeling</span></a></h2>
<p>Hieronder een overzicht van extra opties in de koppeling.</p>
<h3 id="berichten" tabindex="-1"><a class="header-anchor" href="#berichten"><span>Berichten</span></a></h3>
<p>In Medimo is het mogelijk om berichten te maken die betrekking hebben op de cliënt. Deze berichten worden opgenomen in de status van de cliënt in Medimo. Als de Ysis SSO-koppeling wordt gebruikt, worden de berichten vanuit Medimo gekoppeld aan Ysis. Met andere woorden, het bericht dat in Medimo is aangemaakt, wordt zichtbaar in Ysis.</p>
<h3 id="deeplinks" tabindex="-1"><a class="header-anchor" href="#deeplinks"><span>Deeplinks</span></a></h3>
<p>Er kan met verschillende SSO-koppelingen gebruik worden gemaakt van 'Deeplinks'. Hierdoor landt de gebruiker op een specifieke pagina in Medimo. Voor meer informatie daarover kunt u artikel</p>
<p><a href="https://portaal.medimo.nl/portal/nl/kb/articles/beschrijving-van-deeplinking" target="_blank" rel="noopener noreferrer">Beschrijving van Deeplinking</a> raadplegen.</p>
<h3 id="koppelvlak-opties" tabindex="-1"><a class="header-anchor" href="#koppelvlak-opties"><span>Koppelvlak opties</span></a></h3>
<p>Om de koppeling beter te laten aansluiten op de werkwijze, zijn er een aantal SSO-opties die kunnen worden geactiveerd. Voor meer informatie over deze opties kunt u artikel <a href="https://portaal.medimo.nl/portal/nl/kb/articles/waarvoor-dienen-de-sso-optie-s-in-het-koppelvlak" target="_blank" rel="noopener noreferrer">Wat zijn de SSO-optie(s) in het koppelvlak?</a> raadplegen.</p>
</div></template>


