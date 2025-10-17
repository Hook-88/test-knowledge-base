---
title: Ysis Zorgdossier SSO
date: 2025-10-16T23:41:06.592Z
tags:
  - ysis
  - koppeling
  - single
  - sign
  - on
type: web
---
Deze handleiding beschrijft hoe Ysis Zorgdossier kan worden gekoppeld aan Medimo met behulp van OpenID Connect (OIDC) en hoe gebruikers via deze koppeling kunnen inloggen. Tevens wordt uitgelegd hoe Functioneel Applicatiebeheerders (FAB) groepen uit Ysis Zorgdossier kunnen koppelen aan beveiligingsgroepen binnen MEdimo om de rechten van gebruikers te beheren.

# Doel van de Ysis-koppeling:

De OIDC-koppeling met Ysis Zorgdossier biedt diverse voordelen:

* **Single Sign-On (SSO):** Gebruikers hoeven slechts één keer in te loggen bij Ysis en krijgen dan direct toegang tot Medimo.
* **Centralisatie van authenticatie:** Beheer van gebruikers en authenticatie blijft primair in Ysis Zorgdossier.

## Voor wie is deze handleiding?

* **Functioneel Applicatiebeheerders (FAB):** Voor het configureren en beheren van de Ysis-koppelingen en groepsmapping.
* **Eindgebruikers:** Voor het begrijpen van het inlogproces via Ysis Zorgdossier.

# Voorbereiding

Om gebruik te kunnen maken van de SSO-koppeling, dient deze te zijn geconfigureerd in Medimo en Ysis Zorgdossier. Hiervoor moeten gegevens worden uitgewisseld. 

## Koppeling configureren (koppelvlak)

In Medimo wordt per klant voor acceptatie en productie een koppelvlak ingericht. Dit koppelvlak wordt gebruikt om de geldigheid van de koppeling te valideren. De Medimo helpdesk maakt het koppelvlak aan en configureert die. De helpdesk heeft hiervoor de volgende gegevens nodig:

* **OpenId-Connect identity provider:** Dit is de url die wordt gebruikt om de identiteit van de gebruiker na te gaan.
* **OpenId Client/Application Id:** Dit is het ID die Medimo gebruikt om zich te identificeren bij Ysis. 
* **OpenId Client/Application Secret:** Dit secret wordt samen met het ID gebruikt om de toegang te krijgen tot het identificatiesysteem van Ysis Zorgdossier. 

Tijdens implementatie worden deze gegevens uitgewisseld. 

Voor het configureren van de koppeling in Ysis Zorgdossier kunt u de documentatie van Gerimedica raadplegen.

Pas als de koppeling in beide systemen correct is geconfigureerd, is die technisch gereed en kan de [Koppelvlaktabel OpenId Beveiligingsgroep](#koppelvlaktabel-open-id-beveiligingsgroepen) in Medimo worden ingericht. 

# Proces

Dit hoofdstuk beschrijft het pad dat een gebruiker volgt wanneer deze inlogt in Medimo via Ysis Zorgdossier.

## Algemene flow

Dit hoofdstuk beschrijft het proces dat een gebruiker doorloopt wanneer deze inlogt in Medimo via Ysis Zorgdossier, en welke controles op de achtergrond plaatsvinden om een veilige en correcte toegang te garanderen.

### SSO starten

De gebruiker start de SSO met een daarvoor speciaal geconfigureerde knop in Ysis Zorgdossier. Hiermee vindt er een reeks gestandaardiseerde OpenID Connect-stappen plaats. Hierbij wordt de authenticiteit van zowel de gebruiker als Medimo gecontroleerd. Daarvoor wordt het koppelvlak dat in Medimo is ingericht gebruikt. Op het moment dat gegevens niet overeenkomen wordt de toegang tot Medimo voor de gebruiker geweigerd. 

### Koppelvlaktabel OpenId-connect nagaan

In Medimo worden Ysis Zorgdossier locaties gekoppeld in de koppelvlaktabel OpenId-connect Beveiligingsgroep aan beveiligingsgroepen. Aan deze beveiligingsgroepen zijn permissies toegevoegd, die bepalen wat de gebruiker kan in Medimo.

Medimo krijgt van Ysis Zorgdossier door tot welke locaties de gebruiker gemachtigd is in Ysis zorgdossier. Deze locaties worden opgezocht in de koppelvlaktabel, en wordt nagegaan aan welke beveiligingsgroepen die zijn gekoppeld. De permissies die zijn toegevoegd aan de beveiligingsgroepen worden toegekend aan de gebruiker. 

Ysis locaties die niet zijn gekoppeld wordt genegeerd. Is geen enkele locatie van de gebruiker gekoppeld, dan worden er geen permissies toegekend en kan de gebruiker geen werkzaamheden uitvoeren.

### Gebruiker inloggen

Als eenmaal bekend is welke permissies moeten worden toegekend aan de gebruiker wordt de gebruiker ingelogd. Hierdoor krijgt die dan bijvoorbeeld de status, toedienregistratie of het hoofdmenu te zien. Dit wordt bepaald door de meegestuurde viewparameter ([deeplinking](https://portaal.medimo.nl/portal/nl/kb/articles/beschrijving-van-deeplinking)). 

# Koppelvlaktabel Open-Id beveiligingsgroepen

De koppelvlaktabel Open-Id beveiliginsgroep wordt gebruikt om te bepalen welke permissies de gebruiker ontvangt (zie hoofdstuk Koppelvlaktabel OpenId-connect nagaan). De functioneel applicatiebeheerder dient in deze tabel de Ysis Zorgdossier locaties te koppelen aan de Medimo beveiligingsgroepen. 

## Nieuwe Ysis Zorgdossier locatie koppelen

Als er een onbekende Ysis Zorgdossier locatie wordt doorgegeven, voegt Medimo automatisch een nieuwe regel toe aan de koppelvlaktabel. Is het een locatie die geen gebruikt maakt van Medimo, dan hoeft u niks te doen. Niet gekoppelde locaties worden genegeerd.

Gaat de locatie wel met Medimo werken, dan dient deze aan de juiste beveiligingsgroep te worden gekoppeld. Dit kan op de volgende wijze:

1. Open de koppelvlaktabel Open-Id beveiligingsgroepen.
2. Zoek de nieuwe regel op en open deze.
3. Selecteer de juiste beveiligingsgroep.
4. Sla de wijziging op.

# Foutmeldingen

Treedt er een fout op in de koppeling, dan kan de toegang (deels) worden geweigerd. Deze fout dient te worden opgelost voordat de gebruiker volledig toegang krijgt tot Medimo. 

Van deze fout wordt een foutmeldingen gegenereerd. Deze melding is na te gaan in de log single-sign-on. Ook wordt hiervan een e-mail verstuurd naar het ingestelde notify adres in het koppelvlak.

Hieronder een overzicht van foutmeldingen en de toelichting daarop.

## Geen beveiligingsgroepen gevonden

Om de permissies van de gebruiker te bepalen, worden Ysis Zorgdossiers locaties gebruikt. [Deze locaties zijn gekoppeld aan Medimo beveiligingsgroepen](#koppelvlaktabel-openid-connect-nagaan). 

Locaties die niet zijn gekoppeld worden genegeerd. Is er geen enkele locatie gekoppeld, dan wordt deze foutmelding gegenereerd. Deze foutmelding kan twee oorzaken hebben:

* Er zijn locaties die moeten worden gekoppeld.
* Gebruiker beschikt niet over de juiste permissies in Ysis Zorgdossier.

### Geen beveiligingsgroepen gevonden - Troubleshoot

1. Open de log single-sign-on.

   * Bijvoorbeeld via Beer > Logs > Log single-sign-on.
2. Zoek de foutmelding op en open deze. Hier wordt getoond welke data is uitgewisseld. 
3. In de log worden aan de linkerzijde nummers weergegeven. Bij nummer 6 kun je de ID's van de locaties uit Ysis Zorgdossier nagaan. Deze ID's kunt u opzoeken in de koppelvlaktabel Open-Id-Connect en zo nodig koppelen. Zijn het locaties die geen gebruik maken van Medimo, dan dienen de permissies/rechten in Ysis Zorgdossier te worden aangepast. 

### Geen permissies gevonden - Troubleshoot

1. Open de log single-sign-on.

   * Bijvoorbeeld via Beer > Logs > Log single-sign-on.
2. Zoek de foutmelding op en open deze. Hier wordt getoond welke data is uitgewisseld. 
3. In de log worden aan de linkerzijde nummers weergegeven. Bij nummer 6 kun je de ID's van de locaties uit Ysis Zorgdossier nagaan. Deze ID's kunt u opzoeken in de koppelvlaktabel Open-Id-Connect en nagaan hoe die zijn gekoppeld. 

Mogelijk is de verkeerde beveiligingsgroep gekoppeld. Koppel in dat geval de juiste beveiligingsgroep en vraag de gebruiker opnieuw in te loggen. 

Is de juiste beveiligingsgroep gekoppeld, dan heeft deze groep geen permissies. Deze dient u toe te voegen. U kunt vanuit de details van de gekoppelde regel, de gekoppelde beveiligingsgroep openen. Vanuit daar kunt u permissies toevoegen. Als alle benodigde permissies zijn toegevoegd, kunt u de gebruiker vragen een nieuwe inlogpoging te doen.