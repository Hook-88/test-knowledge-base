---
title: Ysis SSO
date: 2025-10-17T20:42:11.536Z
tags:
  - ysis
  - single
  - sign
  - on
  - single-sign-on
type: web
---

# Ysis SSO

Dit artikel beschrijft de werking van de reguliere Ysis SSO-koppeling. Gerimedica kan de URL van de inlog knop aanpassen zodat er gebruik wordt gemaakt van een OpenId-Connect SSO-koppeling. Voor het beheren van een OpenId-Connect SSO-koppeling kunt u artikel [Beschrijving van de OpenId-Connect koppeling](https://portaal.medimo.nl/portal/nl/kb/articles/beschrijving-van-de-openid-connect-koppeling) raadplegen.

Het is _niet_ mogelijk om beide SSO-methoden te gebruiken. Bepaal van te voren goed welke methode het beste past binnen uw organisatie.

## Omschrijving

Een Single Sign-On (SSO) koppeling is een technologie waarmee een gebruiker zich slechts één keer hoeft aan te melden om toegang te krijgen tot meerdere applicaties of systemen. In plaats van zich apart aan te melden bij elke applicatie of systeem die hij of zij wil gebruiken, kan de gebruiker inloggen met één set aanmeldingsgegevens (bijvoorbeeld een gebruikersnaam en wachtwoord) en krijgt vervolgens naadloos toegang tot alle gekoppelde applicaties en systemen, zonder dat hij of zij opnieuw hoeft in te loggen.

## Inrichting Ysis

Om gebruik te kunnen maken van de SSO-koppeling moet in Ysis een aantal zaken worden ingericht. Voor meer informatie daarover kunt u de documentatie van Gerimedica raadplegen.

## Proces

De koppeling doorloopt onderstaande proces bij gebruik van de SSO-koppeling.

1. **Gebruiker logt in**\
   Hierbij wordt een klantspecifieke URL gebruikt. Hierdoor weet Medimo welk koppelvlak er moet worden nagegaan. Voor het valideren van de toegang tot Medimo wordt het volgende nagegaan:

   - **Certificaat -** Deze is uitgewisseld met Gerimedica. Komt het certificaat niet overeen met wat er is ingericht in het koppelvlak dan weigert Medimo de toegang.
   - **IP-adres -** In het koppelvlak wordt aangegeven welke IP-adressen zijn vertrouwd (op de whitelist staan). Komt het verzoek van een ander IP-adres dan wordt de toegang geweigerd.

2. **Koppeltabel SSO nagaan**\
   Medimo gebruikt hiervoor het ID van het Ysis account om te zoeken in de 'Koppelvlaktabel single sign-on'. Dit kan tot het volgende leiden:

   - **Het ID staat niet in de tabel -** Medimo kan niet bepalen welke permissies er moeten worden toegekend en vraagt de gebruiker in te loggen met het Medimo account. Hiermee koppelt de gebruiker zelf het Ysis account aan het Medimo account. Medimo voegt daarmee een regel toe aan de 'Koppelvlaktabel single sign-on', met het nieuwe ID en het corresponderende Medimo account.
   - **Het ID staat wel in de tabel -** Medimo gaat na wat het corresponderende Medimo account is en logt de eindgebruiker daarmee in. Medimo kan, afhankelijk van de koppelvlak opties, vragen om het inloggen te bevestigen middels het Medimo wachtwoord.

3. **Permissies toekennen aan gebruiker**\
   Nu het corresponderende Medimo account bekend is, krijgt de gebruiker de permissies toegekend aan het Medimo account.

### Wel (of niet) tonen van cliënt

Er kan op cliëntniveau gebruik gemaakt worden van de SSO-koppeling. Hiermee landt de gebruiker direct in de status van de cliënt in Medimo. Om te bepalen of Medimo de cliënt toont wordt het volgende nagegaan:

1. **Is de cliënt bekend? -** Medimo gebruikt hiervoor het ID van de cliënt in Ysis en zoekt een match in Medimo op het veld externe ID. Is er geen match, dan wordt er gezocht op BSN. Wordt daar ook geen match op gevonden, dan toont Medimo de foutmelding: "Onbekende cliënt". Ondanks dat de cliënt niet wordt gevonden, kan de eindgebruiker wel inloggen op Medimo.
2. **Heeft de gebruiker in Medimo voldoende permissies voor de cliënt? -** Zo niet, dan wordt de foutmelding "onvoldoende rechten voor deze cliënt" getoond. Ondanks dat de gebruiker geen permissies heeft voor de cliënt, kan de gebruiker wel inloggen op Medimo. Heeft de gebruiker wel voldoende permissies dan toont Medimo de status van de cliënt.

## Overige functies in de koppeling

Hieronder een overzicht van extra opties in de koppeling.

### Berichten

In Medimo is het mogelijk om berichten te maken die betrekking hebben op de cliënt. Deze berichten worden opgenomen in de status van de cliënt in Medimo. Als de Ysis SSO-koppeling wordt gebruikt, worden de berichten vanuit Medimo gekoppeld aan Ysis. Met andere woorden, het bericht dat in Medimo is aangemaakt, wordt zichtbaar in Ysis.

### Deeplinks

Er kan met verschillende SSO-koppelingen gebruik worden gemaakt van 'Deeplinks'. Hierdoor landt de gebruiker op een specifieke pagina in Medimo. Voor meer informatie daarover kunt u artikel

[Beschrijving van Deeplinking](https://portaal.medimo.nl/portal/nl/kb/articles/beschrijving-van-deeplinking) raadplegen.

### Koppelvlak opties

Om de koppeling beter te laten aansluiten op de werkwijze, zijn er een aantal SSO-opties die kunnen worden geactiveerd. Voor meer informatie over deze opties kunt u artikel [Wat zijn de SSO-optie(s) in het koppelvlak?](https://portaal.medimo.nl/portal/nl/kb/articles/waarvoor-dienen-de-sso-optie-s-in-het-koppelvlak) raadplegen.
