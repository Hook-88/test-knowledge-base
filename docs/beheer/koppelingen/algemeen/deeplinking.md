---
title: Deeplinking
date: 2025-10-16T23:41:06.592Z
tags:
  - deeplink
  - deeplinks
  - single
  - sign
  - on
type: web
---
Met Deeplinking kunt u middels een link direct naar een specifieke pagina of inhoud navigeren. In plaats van de algemene startpagina te openen, wordt de gebruiker naar een specifieke bestemming binnen de website gebracht, zoals een artikel, productpagina of een specifieke sectie op de website.

Deeplinks worden vaak gebruikt om gebruikers snel toegang te geven tot de specifieke informatie die ze zoeken, zonder dat ze eerst door de hele website hoeven te navigeren. Dit kan de gebruikerservaring verbeteren en het gemakkelijker maken voor bezoekers om de gewenste informatie te vinden.

Deeplinking kan ook worden gebruikt in mobiele apps. Door deeplinks te gebruiken, kunnen gebruikers vanuit andere apps, zoals social media-apps of e-mails, direct naar een specifieke pagina in de app worden gebracht, in plaats van alleen naar de startpagina van de app. Dit kan de gebruikerservaring van de app verbeteren en kan ook leiden tot meer betrokkenheid en conversies.

## Wat kan Medimo met deeplinking

In Medimo kan dit gebruikt worden in combinatie met een SSO-koppeling. Hiermee landt de gebruiker op een specifieke plek in Medimo. Standaard leidt Medimo de gebruiker naar de status van de cliënt of het hoofdmenu als de cliënt niet kan worden gevonden. Is er geen cliëntcontext, dan landt de gebruiker in het hoofdmenu. Met deeplinking kan een gebruiker landen in bijvoorbeeld de werklijst of een uitgifte-lijst. 

## Wie kan er gebruik maken van deeplinking

Dit verschilt per koppelpartner. Die moet dit aan zijn kant hebben geconfigureerd. Hiervoor moet de koppelpartner een view-parameter toevoegen aan de link die gebruikt wordt voor de SSO-koppeling. Ga na bij uw Leverancier wat de mogelijkheden zijn. 

## Welke view-parameters zijn er?

De volgende view-parameters worden ondersteund:

* **status** - Naar de medicatiestatus van 1 cliënt of hoofdmenu indien cliënt niet gevonden werd.
* **medicatiestatus** - Naar de medicatiestatus van 1 cliënt of hoofdmenu indien cliënt niet gevonden werd.
* **bestellen** - Naar de medicatieaanvraag van 1 cliënt.
* **bestelronde** - Naar de medicatie-herhaalaanvraag van de hele afdeling. Heeft de gebruiker permissies voor meerdere afdelingen, dan toont Medimo een lijst met afdelingen.
* **toedienen** - Naar de TDR van 1 cliënt.
* **deelronde** - Naar de TDR van de hele afdeling. Heeft de gebruiker permissies voor meerdere afdelingen, dan toont Medimo een lijst met afdelingen.
* **werklijst** - Naar de werklijst.
* **werklijstafdeling** - Naar de werklijst van deze afdeling. Heeft de gebruiker permissies voor meerdere afdelingen, dan toont Medimo een lijst met afdelingen.
* **aanvraagmenu** - Naar het menu van de medicatieaanvraag (*Hoofdmenu > Medicatie aanvraag*).
* **tdlmenu** - Naar het menu van de tdl (*Hoofdmenu > Lijsten > Toedienlijsten*).
* **tdrmenu** - Naar het menu van de tdr (*Hoofdmenu > tdr*).
* **dispense** - Naar het uitgifte-lijst (*Hoofdmenu > Uitgifte > Uitgifte-lijst*).
* **default** - Naar het hoofdmenu.
* **medimo-app** - Naar de registreer app pagina om de QR-code te scannen of te openen. 

## View-parameter AMO

Medimo kan ook deeplinken naar het Actueel Medicatieoverzicht (AMO). Medimo doet dit op een andere manier dan bovenstaande. Wanneer de view-parameter 'amo' of 'amo2' wordt meegegeven, dan krijgt de gebruiker de AMO te zien. De bijzonderheid hierin is dat de gebruiker niet wordt ingelogd. Het verschil is dat 'amo' het reguliere AMO betreft, en 'amo2' een aparte variant waar ook zichtbaar is tot wanneer de arts heeft voorgeschreven ('genoeg tot').

## URL

De URL bestaat uit een 'base-URL' (dit deel is altijd hetzelfde) en een endpoint (dit deel veranderd afhankelijk van de view-parameter die wordt gebruikt). Tijdens implementatie van de SSO-koppeling levert Medimo de 'base-URL' aan. Deze is klantspecifiek en heeft het volgende format:

* https://omgeving.medimo.nl/sso/koppelpartner/klantnaam

Hieronder per gemarkeerd deel een korte toelichting:

* **omgeving**: Is de Medimo omgeving - Bijvoorbeeld secure of ggz.
* **koppelpartner:** Is het systeem waarmee is gekoppeld - Bijvoorbeeld ONS, Ysis, Azure of Caress.
* **klantnaam**: Is de naam van uw organisatie

Het endpoint is het deel van de URL dat wijzigt afhankelijk van de view-parameter die u wilt gebruiken. Is deze view-parameter cliëntspecifiek (zoals de view-parameter 'toedienen'), dan dient er een clientId te worden toegevoegd aan de URL. De URL heeft het volgende format:

* https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345

Hieronder per gemarkeerd deel een korte toelichting.

1. ?clientId= **Hiermee wordt aangegeven dat het nummer wat volgt het clientID is -** Dit deel is altijd hetzelfde.
2. 12345 **is het Id van de cliënt** - Medimo matcht dit nummer met het veld externId van de cliënt in Medimo.

Is de view-parameter *niet* cliëntspecifiek dan dient er enkel een vraagteken te worden toegevoegd. De URL ziet er dan uit als volgt:

* https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?

Tot slot dient de view-parameter te worden toegevoegd aan de URL. De URL heeft het volgende format:

* **Cliëntspecifiek** - https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345&view=view-parameter
* **Niet cliëntspecifiek** - https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?view=view-parameter

Voor beide punten geldt dat de toevoeging hetzelfde is. Hieronder daarvan een korte toelichting.

1. **&view=:** Hiermee wordt aangegeven dat het nummer wat volgt de view-parameter is - Dit deel is altijd hetzelfde.
2. **view-parameter**: Is de view-parameter - Bijvoorbeeld status, werklijst of bestelronde.   

### Voorbeelden URL

Hieronder een aantal voorbeelden van URL's met view-parameters:

1. [https://secure.medimo.nl/sso/ons/zonnestraaltjes?clientId=12345&view=status](https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter)
2. [https://secure.medimo.nl/sso/ons/zonnestraaltjes?view=bestelronde](https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter)
3. [https://ggz.medimo.nl/sso/user/ggzmidden?view=werklijstafdeling](https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter)

## Deeplinks OpenId-Connect

Ook SSO-koppelingen via OpenId-Connect kunnen gebruik maken van Deeplinking. Voor een aantal view-parameters geldt dat hiervoor wel een cliëntcontext moet zijn in de bron. Dit betreffen de volgende view-parameters:

* **status**: Naar de medicatiestatus van 1 cliënt of hoofdmenu indien cliënt niet gevonden werd.
* **medicatiestatus**: Naar de medicatiestatus van 1 cliënt of hoofdmenu indien cliënt niet gevonden werd.
* **bestellen**: Naar de medicatieaanvraag van 1 cliënt.
* **toedienen**: Naar de TDR van 1 cliënt.

Voor bovenstaande view-parameters geldt dat het clientID dat wordt toegevoegd moet overeenkomen met het ID van de cliënt in het systeem waarmee Medimo een NAW-koppeling heeft. Voor de OpenID-Connect koppelingen is het *niet* mogelijk om het BSN van de cliënt te gebruiken. Over het algemeen betekent dit dat er alleen binnen de cliëntcontext gedeeplinked kan worden vanuit het ECD waarmee de NAW-koppeling is.

Het format van de endpoint voor de OpenId-Connect koppelingen is hetzelfde als de standaard SSO-koppelingen. De Base URL wijkt wel af. Ook hiervoor geldt dat deze tijdens implementatie worden aangeleverd door Medimo. Deze is klantspecifiek en heeft het volgende format:

* https://omgeving.medimo.nl/sso/openidconnect/klantnaam_openidprovider 

Hieronder per gemarkeerd deel een korte toelichting:

1. **omgeving**: Is de Medimo omgeving - Bijvoorbeeld secure of ggz.
2. **klantnaam**: Is de naam van uw organisatie - Deze waarde wordt in Medimo opgegeven in het koppelvlak in het veld 'Medimo Application Id'. Raadpleeg artikel [Beschrijving van de OpenId-Connect koppeling](https://portaal.medimo.nl/portal/nl/kb/articles/beschrijving-van-de-openid-connect-koppeling) voor meer informatie over het koppelvlak**.**
3. **openidprovider**: Is de bron van de OpenId-Connect koppeling - Bijvoorbeeld Azure of HelloID.

### Voorbeelden OpenId-Connect URL

Hieronder een aantal voorbeelden van URL's met view-parameters:

1. [https://secure.medimo.nl/sso/openidconnect/zonnestraaltjes_azure?clientId=12345&view=status](https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter)
2. [https://secure.medimo.nl/sso/](https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter)[openidconnect/](https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter)[/zonnestraaltjes_azure?view=bestelronde](https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter)
3. [https://ggz.medimo.nl/sso/](https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter)[openidconnect](https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter)[/ggzmidden_helloid?view=werklijstafdeling](https://omgeving.medimo.nl/sso/koppelpartner/klantnaam?clientId=12345?view=view-parameter)

## Deeplinks van app naar MedimoApp

Het is mogelijk om vanuit een app te deeplinken naar een cliënt in de MedimoApp. Hiermee kan een gebruiker vanuit een app inloggen op de MedimoApp waar dan direct de cliënt wordt getoond. Dit kan op MedimoId of op ExternId (Id uit ECD of EPD). Hiervoor kunnen onderstaande URL's worden gebruik:

### Deeplinken op ExternID

* medimo://patient/medication?patient.identifier=http://fhir.nl/fhir/NamingSystem/localidentifier%7C%patienId%

Hierbij is %patienId% het Id van de cliënt in het ECD/EPD. De deeplink:  *medimo://patient/medication?patient.identifier=<http://fhir.nl/fhir/NamingSystem/localidentifier%7C123>* toont de cliënt met het ExternId 123

### Deeplinken op MedimoID

* medimo://patient/medication?patient.identifier=http://medimo.nl/fhir/NamingSystem/localidentifier%7C{clientId}

Hierbij is **%clientId%** het Id van de cliënt in het ECD/EPD. De deeplink:  *medimo://patient/medication?patient.identifier=<http://medimo.nl/fhir/NamingSystem/localidentifier%7C456>* toont de cliënt met het MedimoId 456