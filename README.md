# File Analyzer

## Descrizione

Questa applicazione Node.js legge un file dal percorso fornito dall'utente e calcola:
- Il numero totale di parole nel file
- Il numero totale di lettere nel file
- Il numero totale di spazi nel file
- Le parole che si ripetono più di 10 volte e il numero di ripetizioni

## Design Pattern utilizzato

L'applicazione utilizza il pattern Strategy per gestire la lettura dei file da percorsi locali e URL. Questo pattern consente di definire una famiglia di algoritmi, incapsularli ciascuno dentro una classe separata e renderli intercambiabili.

## Struttura del Progetto e File Principali

src/strategies/FileReaderStrategy.ts: Definisce l'interfaccia per tutte le strategie di lettura dei file.
src/strategies/LocalFileReader.ts: Implementa la strategia di lettura per i file locali.
src/strategies/URLFileReader.ts: Implementa la strategia di lettura per i file da URL.
src/fileReader.ts: La classe FileReader funge da contesto e utilizza una strategia di lettura specifica basata sul tipo di percorso fornito (locale o URL).
src/index.ts: Contiene la logica principale per leggere un file e analizzare il suo contenuto.

## Requisiti

- [Node.js](https://nodejs.org/) v16 o superiore


## Installazione

1. Clona il repository:

 ```sh
git clone <URL_DEL_REPOSITORY>
cd my-node-typescript-project
```

2. Installa le dipendenze:

```sh
npm install
```

3. Configura TypeScript:

```sh
npx tsc --init
```

## Uso

Per eseguire l'applicazione, utilizza il comando:

```sh
npm start <file_path_or_url>
```
## Esempi

lettura di un file locale

 ```sh
npm start ./example.txt
```
lettura di un file URL

```sh
npm start http://example.com/file.txt
```