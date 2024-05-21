# File Analyzer

## Descrizione

Questa applicazione Node.js legge un file dal percorso fornito dall'utente e calcola:
- Il numero totale di parole nel file
- Il numero totale di lettere nel file
- Il numero totale di spazi nel file
- Le parole che si ripetono più di 10 volte e il numero di ripetizioni

L'applicazione utilizza il pattern Strategy per gestire la lettura di file sia da percorsi locali che da URL.

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
