---
title: Optionist App - Entwicklung für iPhone und iPad 
description: iPhone entwicklung einer mobilen Anwendung zur Freizeitgestaltung  
date: "2019-07-26T17:26:45+02:00"
Author: Antonio Agudo
jobDate: 2016
work: [startup, programming, mobile, ios]
techs: [java, dropwizard, objective-c, swift]
Image: /portfolio/ios-development-mobile-app-optionist/optionist_app_highlights_m.webp
thumbnail: /portfolio/ios-development-mobile-app-optionist/optionist_app_highlights_m.webp
projectUrl: 
testimonial:
  name: RTL Hessen 
  role: Redaktion Hessen lokal
  image: ios-development-mobile-app-optionist/rtl-hessen-logo.webp 
  text: "Thema: Langeweile in der Freizeit? Die Optionist App hilft mit kreativen Aktionen. Wurde auf RTL Hessen ausgestrahlt am Montag 26 September 2016, 18:00 Uhr."   
---
### Motivation

Die Optionist App wurde aus dem Bedürfnis geboren, Menschen in ihrer Freizeit neue Dinge ausprobieren zu lassen, 
die sie noch nie zuvor versucht haben. In der finalen Version der für Apples iPhone und iPad programmierten mobile App konnten über 500 
solcher Alltagsabenteuer in einer [Gamification](https://de.wikipedia.org/wiki/Gamification) orientierten Oberfläche erlebt werden.

Ein integriertes Social network sorgte zusätzlich dafür, dass sich die Benutzer der App auch untereinander austauschen 
konnten.
<div style="text-align: center;">
![Das Splashscreen Logo der Optionist App: Make life your playground](/portfolio/ios-development-mobile-app-optionist/optionist-playground-logo.webp)
</div>

Sämtliche Entwicklunsgarbeit wurde hierbei von mir als alleinigem Entwickler vorgenommen. Marketing und Redaktion 
wurden maßgeblich durch meinen Mitgründer [Sebastian Kleinsorge](https://www.xing.com/profile/Sebastian_Kleinsorge2/) betrieben. 

### Back-End Technologie

Im Back-End wurde hierbei besonders auf maximale Geschwindigkeit hin optimiert. Das notwendige Umsetzen einer Tabellenstruktur
für das enthaltene Social network und die potenziell massiven gleichzeitigen Anfragen der mobile Clients machten frühe 
performance Tests notwendig die in den JUnit Test-Suites einer CI/CD Umgebung auf Basis von Jenkins berücksichtigt wurden.
So konnte garantiert werden, dass die durchschnittlich erreichten Requests pro Sekunde auch bei Code Änderungen immer über 
den festgelegten Performance basierten Qualitätsmetriken lagen, bevor der Code auf das Produktivsystem aufgespielt wurde.
  
Die REST-Schnittstelle im Back-End wurde aus diesem Grund über das vergleichsweise leichtgewichtige [Dropwizard](https://www.dropwizard.io) 
Framework in Java realisiert, welches an eine [PostgreSQL](https://www.postgresql.org/) Datenbank angebunden wurde. 
Der Zugriff auf die Datenbank erfolgte, statt über einen konventionellen ORM Mapper wie Hibernate, über das 
simpler strukturierte, aber dafür schnellere [JDBI](http://jdbi.org/). 

Die angemeldeten Benutzer Sessions der mobilen Clients wurden durch zustandslose [JWT Tokens](https://jwt.io/) zugeordnet, 
welche über SSL/TLS gesicherte Verbindungen mit dem Back-End kommunizierten. Ab Clients mit iOS 9 wurde zusätzlich 
[HSTS](https://de.wikipedia.org/wiki/HTTP_Strict_Transport_Security) unterstützt, um die Verbindungen sicherer gegen 
Protokoll Attacken zu machen.       

### Front-End Technologie

Die Optionist App wurde als Universal App für iPhone und iPad entwickelt. 
Die Programmiersprachen Objective-C, sowie das 2016 noch junge [Swift](https://swift.org/) wurden verwendet, um 
die mobile App zu realisieren. Hierbei kamen als Entwicklungsumgebung Xcode und AppCode zum Einsatz. 
Komponenten wurden über [Cocoapods](https://cocoapods.org/) eingebunden.     
 
#### Video: Optionist App Walkthrough
<center>
   <div class="lazyYT" data-youtube-id="1aeI1dptcxM" data-width="315" data-height="560" data-ratio="9:16">Click to play video</div>
</center>

### RTL Hessen probiert die Optionist App aus
<center>
{{<figure src="/portfolio/ios-development-mobile-app-optionist/rtl-hessen-berichtet-ueber-die-optionist-app.webp">}}

*Thema: Langeweile in der Freizeit? Die Optionist App hilft mit kreativen Aktionen. Wurde auf RTL Hessen ausgestrahlt am Montag 26 September 2016, 18:00 Uhr.*

<img class="img-fluid w-25 rounded-circle border-thick border-light" src="/portfolio/ios-development-mobile-app-optionist/rtl-hessen-logo.webp" alt="RTL Hessen" title="RTL Hessen">
</center>
