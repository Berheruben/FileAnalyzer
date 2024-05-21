import { FileReaderStrategy } from './FileReaderStrategy';
import fs from 'fs';

// Implementa la strategia di lettura per i file da URL.
export class LocalFileReader implements FileReaderStrategy {
    async read(path: string): Promise<string> {
        return fs.promises.readFile(path, 'utf-8');
    }
}
