# guaitaAngles

**Verbs en anglès, peça a peça.** Aplicació per estudiar les formes verbals de l'anglès (positive, negative, question i short answer) pensada per a un nen o nena de 12 anys i per fer-se servir sobretot a l'**iPad**. No es tracta de memoritzar vocabulari, sinó d'assentar les formes, amb exemples i exercicis de verbs regulars i irregulars.

Forma part de la suite **Guaita Apps**. És un únic fitxer HTML, sense dependències externes, i tot es processa al teu dispositiu: no s'envia cap dada enlloc.

## Què fa

- **Frases:** cada frase es construeix amb peces de colors (subjecte, auxiliar, *not*, verb, resta). En passar a *Question*, l'auxiliar salta davant del subjecte.
- **Temps verbals seleccionables** en tres nivells: *to be*, *have got*, *can*, present simple (nivell 1); present continuous, *to be* en passat, past simple (nivell 2); past continuous, *will*, *going to*, present perfect (nivell 3).
- **Conjuga:** conjugació clàssica de qualsevol verb, per a totes les persones i les quatre formes.
- **Exercicis:** rondes de 10 preguntes (transformar la frase, omplir el buit, resposta curta, verbs irregulars), amb estrelles i explicació de la regla.
- **Verbs:** 18 regulars amb el so de la *-ed* i 166 irregulars, ordenables per patró, A–Z, freqüència o errors, amb fonètica a la catalana o IPA i avisos de «s'escriu igual però sona diferent».
- **Trucs** per recordar les regles (*la -s s'emporta*, *la pregunta fa la volta*, el semàfor de la *-ed*…).
- **Veu en anglès** (la del mateix dispositiu) i **traducció literal al català** mentre es manté premut el botó CA.
- **PWA:** s'instal·la a la pantalla d'inici i funciona sense connexió.

## Com s'usa

Obre `index.html` (landing) o directament `pagesCAT/guaitaAngles_0.4.html`.

### Instal·lar-la a l'iPad
1. Obre l'adreça de l'app amb **Safari** (cal https, p. ex. GitHub Pages).
2. Toca **Comparteix** → **Afegeix a la pantalla d'inici**.

### Publicar-la amb GitHub Pages
*Settings → Pages → Branch: `main`, carpeta `/ (root)`.*

## Estructura

```
index.html                       landing
pagesCAT/guaitaAngles_0.4.html   l'app
pagesCAT/manifest.webmanifest    manifest PWA
pagesCAT/sw.js                   service worker (ús sense connexió)
pagesCAT/HLP guaitaAngles-ajuda.html   manual d'ús
icones/                          icones i imatge per a xarxes
```

## Llicència

[GNU Affero General Public License v3.0 only](LICENSE) (`AGPL-3.0-only`).
© 2026 SBS BiM Consulting, Jordi Subirós.

Els exemples, regles per recordar, traduccions i il·lustracions són de creació pròpia. La fonètica i les traduccions s'han generat automàticament i poden contenir alguna errada: es recomana revisar-les.

Guaita Apps es distribueix «tal com és», sense cap garantia. Les eines estan pensades desde la recerca i com a suport tècnic i educatiu; la verificació dels resultats i la responsabilitat derivada del seu ús recauen únicament sobre l'usuari final.

Contacte: guaitaapps@gmail.com
