import { FileReaderStrategy } from './strategies/FileReaderStrategy';
import { LocalFileReader } from './strategies/LocalFileReader';
import { URLFileReader } from './strategies/URLFileReader';

// La classe FileReader funge da contesto e utilizza una strategia di lettura specifica
// basata sul tipo di percorso fornito (locale o URL).
export class FileReader {
    private strategy: FileReaderStrategy;

    // Determina quale strategia utilizzare in base al percorso fornito.
    constructor(path: string) {
        if (path.startsWith('http://') || path.startsWith('https://')) {
            this.strategy = new URLFileReader();
        } else {
            this.strategy = new LocalFileReader();
        }
    }

    async read(path: string): Promise<string> {
        return this.strategy.read(path);
    }
}
