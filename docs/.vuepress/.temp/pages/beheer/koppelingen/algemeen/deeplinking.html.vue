<template><div><p>Met Deeplinking kunt u middels een link direct naar een specifieke pagina of inhoud navigeren. In plaats van de algemene startpagina te openen, wordt de gebruiker naar een specifieke bestemming binnen de website gebracht, zoals een artikel, productpagina of een specifieke sectie op de website.</p>
<p>Deeplinks worden vaak gebruikt om gebruikers snel toegang te geven tot de specifieke informatie die ze zoeken, zonder dat ze eerst door de hele website hoeven te navigeren. Dit kan de gebruikerservaring verbeteren en het gemakkelijker maken voor bezoekers om de gewenste informatie te vinden.</p>
<p>Deeplinking kan ook worden gebruikt in mobiele apps. Door deeplinks te gebruiken, kunnen gebruikers vanuit andere apps, zoals social media-apps of e-mails, direct naar een specifieke pagina in de app worden gebracht, in plaats van alleen naar de startpagina van de app. Dit kan de gebruikerservaring van de app verbeteren en kan ook leiden tot meer betrokkenheid en conversies.</p>
<h2 id="wat-kan-medimo-met-deeplinking" tabindex="-1"><a class="header-anchor" href="#wat-kan-medimo-met-deeplinking"><span>Wat kan Medimo met deeplinking</span></a></h2>
<p>In Medimo kan dit gebruikt worden in combinatie met een SSO-koppeling. Hiermee landt de gebruiker op een specifieke plek in Medimo. Standaard leidt Medimo de gebruiker naar de status van de cliënt of het hoofdmenu als de cliënt niet kan worden gevonden. Is er geen cliëntcontext, dan landt de gebruiker in het hoofdmenu. Met deeplinking kan een gebruiker landen in bijvoorbeeld de werklijst of een uitgifte-lijst.</p>
<h2 id="wie-kan-er-gebruik-maken-van-deeplinking" tabindex="-1"><a class="header-anchor" href="#wie-kan-er-gebruik-maken-van-deeplinking"><span>Wie kan er gebruik maken van deeplinking</span></a></h2>
<p>Dit verschilt per koppelpartner. Die moet dit aan zijn kant hebben geconfigureerd. Hiervoor moet de koppelpartner een view-parameter toevoegen aan de link die gebruikt wordt voor de SSO-koppeling. Ga na bij uw Leverancier wat de mogelijkheden zijn.</p>
<h2 id="welke-view-parameters-zijn-er" tabindex="-1"><a class="header-anchor" href="#welke-view-parameters-zijn-er"><span>Welke view-parameters zijn er?</span></a></h2>
<p>De volgende view-parameters worden ondersteund:</p>
<ul>
<li><strong>status</strong> - Naar de medicatiestatus van 1 cliënt of hoofdmenu indien cliënt niet gevonden werd.</li>
<li><strong>medicatiestatus</strong> - Naar de medicatiestatus van 1 cliënt of hoofdmenu indien cliënt niet gevonden werd.</li>
<li><strong>bestellen</strong> - Naar de medicatieaanvraag van 1 cliënt.</li>
<li><strong>bestelronde</strong> - Naar de medicatie-herhaalaanvraag van de hele afdeling. Heeft de gebruiker permissies voor meerdere afdelingen, dan toont Medimo een lijst met afdelingen.</li>
<li><strong>toedienen</strong> - Naar de TDR van 1 cliënt.</li>
<li><strong>deelronde</strong> - Naar de TDR van de hele afdeling. Heeft de gebruiker permissies voor meerdere afdelingen, dan toont Medimo een lijst met afdelingen.</li>
<li><strong>werklijst</strong> - Naar de werklijst.</li>
<li><strong>werklijstafdeling</strong> - Naar de werklijst van deze afdeling. Heeft de gebruiker permissies voor meerdere afdelingen, dan toont Medimo een lijst met afdelingen.</li>
<li><strong>aanvraagmenu</strong> - Naar het menu van de medicatieaanvraag (<em>Hoofdmenu &gt; Medicatie aanvraag</em>).</li>
<li><strong>tdlmenu</strong> - Naar het menu van de tdl (<em>Hoofdmenu &gt; Lijsten &gt; Toedienlijsten</em>).</li>
<li><strong>tdrmenu</strong> - Naar het menu van de tdr (<em>Hoofdmenu &gt; tdr</em>).</li>
<li><strong>dispense</strong> - Naar het uitgifte-lijst (<em>Hoofdmenu &gt; Uitgifte &gt; Uitgifte-lijst</em>).</li>
<li><strong>default</strong> - Naar het hoofdmenu.</li>
<li><strong>medimo-app</strong> - Naar de registreer app pagina om de QR-code te scannen of te openen.</li>
</ul>
<h2 id="view-parameter-amo" tabindex="-1"><a class="header-anchor" href="#view-parameter-amo"><span>View-parameter AMO</span></a></h2>
<p>Medimo kan ook deeplinken naar het Actueel Medicatieoverzicht (AMO). Medimo doet dit op een andere manier dan bovenstaande. Wanneer de view-parameter 'amo' of 'amo2' wordt meegegeven, dan krijgt de gebruiker de AMO te zien. De bijzonderheid hierin is dat de gebruiker niet wordt ingelogd. Het verschil is dat 'amo' het reguliere AMO betreft, en 'amo2' een aparte variant waar ook zichtbaar is tot wanneer de arts heeft voorgeschreven ('genoeg tot').</p>
<h2 id="url" tabindex="-1"><a class="header-anchor" href="#url"><span>URL</span></a></h2>
<p>De URL bestaat uit een 'base-URL' (dit deel is altijd hetzelfde) en een endpoint (dit deel veranderd afhankelijk van de view-parameter die wordt gebruikt). Tijdens implementatie van de SSO-koppeling levert Medimo de 'base-URL' aan. Deze is klantspecifiek en heeft het volgende format:</p>
<ul>
<li>https://omgeving.medimo.nl/sso/koppelpartner/klantnaam</li>
</ul>
<p>Hieronder per gemarkeerd deel een korte toelichting:</p>
<ul>
<li><strong>omgeving</strong>: Is de Medimo omgeving - Bijvoorbeeld secure of ggz.</li>
<li><strong>koppelpartner:</strong> Is het systeem waarmee is gekoppeld - Bijvoorbeeld ONS, Ysis, Azure of Caress.</li>
<li><strong>klantnaam</strong>: Is de naam van uw organisatie</li>
</ul>
<p>Het endpoint is het deel van de URL dat wijzigt afhankelijk van de view-parameter die u wilt gebruiken. Is deze view-parameter cliëntspecifiek (zoals de view-parameter 'toedienen'), dan dient er een clientId te worden toegevoegd aan de URL. De URL heeft het volgende format:</p>
<ul>
<li>https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345</li>
</ul>
<p>Hieronder per gemarkeerd deel een korte toelichting.</p>
<ol>
<li>?clientId= <strong>Hiermee wordt aangegeven dat het nummer wat volgt het clientID is -</strong> Dit deel is altijd hetzelfde.</li>
<li>12345 <strong>is het Id van de cliënt</strong> - Medimo matcht dit nummer met het veld externId van de cliënt in Medimo.</li>
</ol>
<p>Is de view-parameter <em>niet</em> cliëntspecifiek dan dient er enkel een vraagteken te worden toegevoegd. De URL ziet er dan uit als volgt:</p>
<ul>
<li>https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?</li>
</ul>
<p>Tot slot dient de view-parameter te worden toegevoegd aan de URL. De URL heeft het volgende format:</p>
<ul>
<li><strong>Cliëntspecifiek</strong> - https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345&amp;view=view-parameter</li>
<li><strong>Niet cliëntspecifiek</strong> - https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?view=view-parameter</li>
</ul>
<p>Voor beide punten geldt dat de toevoeging hetzelfde is. Hieronder daarvan een korte toelichting.</p>
<ol>
<li><strong>&amp;view=:</strong> Hiermee wordt aangegeven dat het nummer wat volgt de view-parameter is - Dit deel is altijd hetzelfde.</li>
<li><strong>view-parameter</strong>: Is de view-parameter - Bijvoorbeeld status, werklijst of bestelronde.</li>
</ol>
<h3 id="voorbeelden-url" tabindex="-1"><a class="header-anchor" href="#voorbeelden-url"><span>Voorbeelden URL</span></a></h3>
<p>Hieronder een aantal voorbeelden van URL's met view-parameters:</p>
<ol>
<li><a href="https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter" target="_blank" rel="noopener noreferrer">https://secure.medimo.nl/sso/ons/zonnestraaltjes?clientId=12345&amp;view=status</a></li>
<li><a href="https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter" target="_blank" rel="noopener noreferrer">https://secure.medimo.nl/sso/ons/zonnestraaltjes?view=bestelronde</a></li>
<li><a href="https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter" target="_blank" rel="noopener noreferrer">https://ggz.medimo.nl/sso/user/ggzmidden?view=werklijstafdeling</a></li>
</ol>
<h2 id="deeplinks-openid-connect" tabindex="-1"><a class="header-anchor" href="#deeplinks-openid-connect"><span>Deeplinks OpenId-Connect</span></a></h2>
<p>Ook SSO-koppelingen via OpenId-Connect kunnen gebruik maken van Deeplinking. Voor een aantal view-parameters geldt dat hiervoor wel een cliëntcontext moet zijn in de bron. Dit betreffen de volgende view-parameters:</p>
<ul>
<li><strong>status</strong>: Naar de medicatiestatus van 1 cliënt of hoofdmenu indien cliënt niet gevonden werd.</li>
<li><strong>medicatiestatus</strong>: Naar de medicatiestatus van 1 cliënt of hoofdmenu indien cliënt niet gevonden werd.</li>
<li><strong>bestellen</strong>: Naar de medicatieaanvraag van 1 cliënt.</li>
<li><strong>toedienen</strong>: Naar de TDR van 1 cliënt.</li>
</ul>
<p>Voor bovenstaande view-parameters geldt dat het clientID dat wordt toegevoegd moet overeenkomen met het ID van de cliënt in het systeem waarmee Medimo een NAW-koppeling heeft. Voor de OpenID-Connect koppelingen is het <em>niet</em> mogelijk om het BSN van de cliënt te gebruiken. Over het algemeen betekent dit dat er alleen binnen de cliëntcontext gedeeplinked kan worden vanuit het ECD waarmee de NAW-koppeling is.</p>
<p>Het format van de endpoint voor de OpenId-Connect koppelingen is hetzelfde als de standaard SSO-koppelingen. De Base URL wijkt wel af. Ook hiervoor geldt dat deze tijdens implementatie worden aangeleverd door Medimo. Deze is klantspecifiek en heeft het volgende format:</p>
<ul>
<li>https://omgeving.medimo.nl/sso/openidconnect/klantnaam_openidprovider</li>
</ul>
<p>Hieronder per gemarkeerd deel een korte toelichting:</p>
<ol>
<li><strong>omgeving</strong>: Is de Medimo omgeving - Bijvoorbeeld secure of ggz.</li>
<li><strong>klantnaam</strong>: Is de naam van uw organisatie - Deze waarde wordt in Medimo opgegeven in het koppelvlak in het veld 'Medimo Application Id'. Raadpleeg artikel <a href="https://portaal.medimo.nl/portal/nl/kb/articles/beschrijving-van-de-openid-connect-koppeling" target="_blank" rel="noopener noreferrer">Beschrijving van de OpenId-Connect koppeling</a> voor meer informatie over het koppelvlak**.**</li>
<li><strong>openidprovider</strong>: Is de bron van de OpenId-Connect koppeling - Bijvoorbeeld Azure of HelloID.</li>
</ol>
<h3 id="voorbeelden-openid-connect-url" tabindex="-1"><a class="header-anchor" href="#voorbeelden-openid-connect-url"><span>Voorbeelden OpenId-Connect URL</span></a></h3>
<p>Hieronder een aantal voorbeelden van URL's met view-parameters:</p>
<ol>
<li><a href="https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter" target="_blank" rel="noopener noreferrer">https://secure.medimo.nl/sso/openidconnect/zonnestraaltjes_azure?clientId=12345&amp;view=status</a></li>
<li><a href="https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter" target="_blank" rel="noopener noreferrer">https://secure.medimo.nl/sso/</a><a href="https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter" target="_blank" rel="noopener noreferrer">openidconnect/</a><a href="https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter" target="_blank" rel="noopener noreferrer">/zonnestraaltjes_azure?view=bestelronde</a></li>
<li><a href="https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter" target="_blank" rel="noopener noreferrer">https://ggz.medimo.nl/sso/</a><a href="https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter" target="_blank" rel="noopener noreferrer">openidconnect</a><a href="https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter" target="_blank" rel="noopener noreferrer">/ggzmidden_helloid?view=werklijstafdeling</a></li>
</ol>
<h2 id="deeplinks-van-app-naar-medimoapp" tabindex="-1"><a class="header-anchor" href="#deeplinks-van-app-naar-medimoapp"><span>Deeplinks van app naar MedimoApp</span></a></h2>
<p>Het is mogelijk om vanuit een app te deeplinken naar een cliënt in de MedimoApp. Hiermee kan een gebruiker vanuit een app inloggen op de MedimoApp waar dan direct de cliënt wordt getoond. Dit kan op MedimoId of op ExternId (Id uit ECD of EPD). Hiervoor kunnen onderstaande URL's worden gebruik:</p>
<h3 id="deeplinken-op-externid" tabindex="-1"><a class="header-anchor" href="#deeplinken-op-externid"><span>Deeplinken op ExternID</span></a></h3>
<ul>
<li>medimo://patient/medication?patient.identifier=http://fhir.nl/fhir/NamingSystem/localidentifier%7C%patienId%</li>
</ul>
<p>Hierbij is %patienId% het Id van de cliënt in het ECD/EPD. De deeplink:  <em>medimo://patient/medication?patient.identifier=<a href="http://fhir.nl/fhir/NamingSystem/localidentifier%7C123" target="_blank" rel="noopener noreferrer">http://fhir.nl/fhir/NamingSystem/localidentifier|123</a></em> toont de cliënt met het ExternId 123</p>
<h3 id="deeplinken-op-medimoid" tabindex="-1"><a class="header-anchor" href="#deeplinken-op-medimoid"><span>Deeplinken op MedimoID</span></a></h3>
<ul>
<li>medimo://patient/medication?patient.identifier=http://medimo.nl/fhir/NamingSystem/localidentifier%7C{clientId}</li>
</ul>
<p>Hierbij is <strong>%clientId%</strong> het Id van de cliënt in het ECD/EPD. De deeplink:  <em>medimo://patient/medication?patient.identifier=<a href="http://medimo.nl/fhir/NamingSystem/localidentifier%7C456" target="_blank" rel="noopener noreferrer">http://medimo.nl/fhir/NamingSystem/localidentifier|456</a></em> toont de cliënt met het MedimoId 456</p>
</div></template>


