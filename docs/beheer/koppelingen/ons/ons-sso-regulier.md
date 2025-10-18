---
title: Ons SSO regulier
date: 2025-10-18T01:48:34.450Z
tags:
  - Ons
  - single-sign-on
  - nedap
type: Web
---
# Ons SSO-koppeling

Dit artikel beschrijft hoe de Ons SSO-koppeling werkt en hoe een functioneel applicatiebeheerder de koppeling beheert. Er zijn 3 varianten van de Ons SSO-koppeling. Deze zijn:

1. **[OpenId-Connect SSO](https://portaal.medimo.nl/portal/nl/kb/articles/beschrijving-van-de-openid-connect-koppeling)**
2. **Reguliere SSO**
3. **[Hybride OpenId-Connect SSO ](https://portaal.medimo.nl/portal/nl/kb/articles/beschrijving-van-de-hybride-sso-ons-openid-connect)**

Dit artikel beschrijft de reguliere SSO-koppeling.

## Omschrijving

Een Single Sign-On (SSO) koppeling is een technologie waarmee een gebruiker zich slechts één keer hoeft aan te melden om toegang te krijgen tot meerdere applicaties of systemen. In plaats van zich apart aan te melden bij elke applicatie of systeem die hij of zij wil gebruiken, kan de gebruiker inloggen met één set aanmeldingsgegevens (bijvoorbeeld een gebruikersnaam en wachtwoord) en krijgt vervolgens naadloos toegang tot alle gekoppelde applicaties en systemen, zonder dat hij of zij opnieuw hoeft in te loggen.

## Inrichting Ons

In Ons zijn er 2 permissies die nodig zijn voor de SSO-koppeling:

1. **Inzien in extern EVS -** Voor gebruikers die medicatie gaan aftekenen of bestellen
2. **Voorschrijven in extern EVS -** Voor persoonlijke gebruikers zoals voorschrijvers en beheerders.

Een gebruiker heeft 1 van deze nodig in Ons om gebruik te kunnen maken van de SSO-koppeling. Voor meer informatie over de inrichting in Ons kunt u de documentatie van Nedap raadplegen. 

## Proces

Onderstaande afbeelding toont welke stappen de koppeling neemt om de permissies van de eindgebruiker te bepalen.

Hieronder volgt per stap een korte toelichting.

1. **Gebruiker logt in** Hierbij wordt een klantspecifieke URL gebruikt. Hierdoor weet Medimo welk koppelvlak er moet worden nagegaan. Voor het valideren van de toegang tot Medimo wordt het volgende nagegaan: 
   * **Certificaat -** Deze is uitgewisseld met Nedap. Komt het certificaat niet overeen met wat er is ingericht in het koppelvlak dan weigert Medimo de toegang.
   * **IP-adres -** In het koppelvlak wordt aangegeven welke IP-adressen zijn vertrouwd (i.e. op de whitelist staan). Komt het verzoek van een ander IP-adres dan wordt de toegang geweigerd. 
3. **Usertype bepaald** Medimo gebruikt de permissie van de eindgebruiker in Ons om te bepalen wat het Usertype is. het Usertype bepaalt welke methode Medimo gebruikt voor het toekennen van de permissies. Hierin zijn 2 mogelijkheden:
4. 1. **Eindgebruiker heeft in Ons de permissie 'Inzien in extern EVS'** - Medimo bepaalt aan de hand van de 'Koppelvlaktabel webservices' welke permissies er moeten worden toegekend. Medimo kenmerkt dergelijke eindgebruikers met het Usertype: VERZORGING. 
   2. **Eindgebruiker heeft in Ons de permissie 'Voorschrijven in extern EVS' -** Medimo bepaalt aan de hand van het gekoppelde account in de 'Koppeltabel single sign-on' welke permissies er moeten worden toegekend. Medimo kenmerkt dergelijke eindgebruikers met het Usertype: VOORSCHRIJVER. Eindgebruikers met de permissie 'Voorschrijven in extern EVS', behoeven ook een account op naam in Medimo. 

Omdat het Usertype van invloed is op het toekennen van de permissies in Medimo, wordt per type het proces toegelicht. 

### Proces Usertype VERZORGING

De koppeling doorloopt de stappen die in onderstaande afbeelding zijn blauw gekleurd. 

![](https://portaal.medimo.nl/galleryDocuments/edbsn847f083b7105b15997447f6d8434257115f9a60122422a4932e5660865644b7448e3b23e0fd498ce21b6ed0adb3f12c74146164d6e2774fe295fd69679e1c0ce?inline=true)

Hieronder volgt per stap een korte toelichting.

1. **Koppelvlaktabel webservices nagaan**Wanneer het usertype VERZORGING is, dan gebruikt Medimo het ID van de hoofdlocatie van de cliënt in Ons om te zoeken in de 'Koppelvlaktabel webservices'. Hierbij zijn 2 mogelijkheden:
2. 1. **Het ID staat niet in de tabel** - Medimo kan niet bepalen welke permissies er moeten worden toegekend. Medimo weigert daarom de toegang en toont de foutmelding: "Ongekoppelde wardID". Medimo voegt een nieuwe regel toe aan de 'Koppelvlaktabel webservices' met dit 'nieuwe' ID, die u moet koppelen.
   2. **Het ID staat in de tabe**l - Medimo gaat na welke aan welke afdeling het ID is gekoppeld
3. **Permissies toekennen aan eindgebruiker**Nu de corresponderende Medimo afdeling bekend is, wordt er gekeken welke gebruikers zijn aangemaakt onder de Medimo afdeling entiteit. Hierbij zijn 2 mogelijkheden:
4. 1. **Er is geen (actieve) gebruiker aangemaakt onder de afdeling** - Medimo kan niet bepalen welke permissies er moeten worden toegekend. Medimo weigert daarom de toegang en toont de foutmelding: "geen gebruiker onder...?". U dient een gebruiker in aan te maken onder de afdeling voordat gebruikers gebruik kunnen maken van de SSO-koppeling.
   2. **Er is wel een gebruiker aangemaakt onder de afdeling** - Medimo gaat na wat de permissies zijn van deze afdelingsgebruiker en wijst deze toe aan de gebruiker. 

### Proces Usertype VOORSCHRIJVER

De koppeling doorloopt de stappen die in onderstaande afbeelding zijn blauw gekleurd. 

![](https://portaal.medimo.nl/galleryDocuments/edbsn847f083b7105b15997447f6d843425714010c5a5b25a6e399a74d306ecdd673bbb85b11630d44e5810e9f882caa10c17bcfb922edf20d70279f4d84459bac73d?inline=true)

Hieronder volgt per stap een korte toelichting.

1. **Koppelvlaktabel SSO nagaan**Wanneer de UserType VOORSCHRIJVER is, dan gebruikt Medimo het ID van het Ons account om te zoeken in de 'Koppelvlaktabel singel sign-on'. Hierbij zijn 2 mogelijkheden:
2. 1. **Het ID staat niet in de tabel** - Medimo kan niet bepalen welke permissies er moeten worden toegekend en vraagt de gebruiker in te loggen met het Medimo account. Hiermee koppelt de gebruiker zelf het Ons account aan het Medimo account. Medimo voegt daarmee een regel toe aan de 'Koppelvlaktabel singel sign-on', met het nieuwe ID en het corresponderende Medimo account. 
   2. **Het ID staat wel in de tabel** - Medimo gaat na wat het corresponderende Medimo account en logt de eindgebruiker daarmee in. Medimo kan, afhankelijk van de koppelvlak opties, vragen om het inloggen te bevestigen middels het Medimo wachtwoord. 
3. **Permissies toekennen aan eindgebruiker**\
   Nu het corresponderende Medimo account bekend is, krijgt de gebruiker de permissies toegekend aan het Medimo account.

### Wel (of niet) tonen van cliënt

Er kan op cliëntniveau gebruik gemaakt van de SSO-koppeling. Hiermee landt de gebruiker direct in de status van de cliënt in Medimo. Om te bepalen of Medimo de cliënt toont  wordt het volgende nagegaan:

1. **Is de cliënt bekend? -** Medimo gebruikt hiervoor het ID van de cliënt in Ons en zoekt een match in Medimo op het veld externe ID. Is er geen match, dan wordt er gezocht op BSN. Wordt daar ook geen match op gevonden, dan toont Medimo de foutmelding: "Onbekende cliënt". Ondanks dat de cliënt niet wordt gevonden, kan de eindgebruiker wel inloggen op Medimo. 
2. **Heeft de gebruiker in Medimo voldoende permissies voor de cliënt?** - Zo niet, dan wordt de foutmelding "onvoldoende rechten voor deze cliënt" getoond. Ondanks dat de gebruiker geen permissies heeft voor de cliënt, kan de gebruiker wel inloggen op Medimo. Heeft de gebruiker wel voldoende permissies dan toont Medimo de status van de cliënt.

## Koppelvlaktabel webservices

Wanneer een gebruiker het Usertype 'VERZORGING' heeft, dan gaat Medimo de 'Koppelvlaktabel webservices' na om te bepalen wat de corresponderende Medimo afdeling is en daarmee welke permissies er worden toegekend aan de gebruiker. Medimo zoekt met het ID van de hoofdlocatie van de cliënt in Ons in de 'Koppelvlaktabel webservices'.  

Gebruik het 'Zoeken in alles'-veld of klik vanuit het hoofdmenu op *Beheer > Koppelvlak beheer > Koppelvlaktabel webservices.* 

### Inrichting Koppelvlaktabel webservices

Het inrichten van de 'Koppelvlaktabel webservices' bestaat uit het koppelen van Ons hoofdlocaties aan Medimo afdelingen. Wanneer er met de SSO-koppeling een ID wordt gebruikt wat niet in de 'Koppelvlaktabel webservices' staat, dan kan Medimo niet bepalen wat de permissies van de eindgebruiker moeten zijn. Medimo weigert daarom de toegang en toont aan de eindgebruiker de foutmelding "Onbekende WardID". Ook wordt er aan de 'Koppelvlaktabel webservices' een regel toegevoegd met dit nieuwe ID. Deze regel dient u te koppelen voordat de gebruiker verder kan. Volg daarvoor onderstaande stappen:

1. **Klik op een regel.**Medimo toont de details van de koppelregel. Onderstaande afbeelding is daarvan een voorbeeld. ![](https://portaal.medimo.nl/galleryDocuments/edbsn7065e0f13ea80b4ab740074b3235aae74ff4bed0be965277139ee6434e513739c570549d90f14315905648d1e28551477e548c3d8c4f302825b297a0a88f7b93?inline=true)
2. **Geef Externe locatie en Externe locatienaam op. **Medimo gebruikt deze gegevens NIET, maar toont deze wel in de tabel. Medimo raadt aan hier de naam van de afdeling + SSO te vullen. U kunt voor beide velden dezelfde waarde gebruiken.  \
   'Externe afdeling' en 'Externe afdelingnaam' zijn gegevens uit Ons. Deze velden dient u ongemoeid te laten.
3. **Selecteer de corresponderende Medimo afdeling. **Klik in het veld achter Medimo afdeling om te zoeken naar de afdeling. Klik vervolgens op de afdeling om deze te selecteren. 
4. **Kies een willekeurige waarde bij 'standaard afdelingsapotheek/afdelingarts' en bij 'Koppeltype'.**\
   Medimo gebruikt deze velden niet.