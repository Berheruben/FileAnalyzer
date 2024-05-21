// Definisce l'interfaccia comune per tutte le strategie di lettura dei file.
export interface FileReaderStrategy {
    read(path: string): Promise<string>;
}
