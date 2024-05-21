import { FileReaderStrategy } from './FileReaderStrategy';
import fs from 'fs';

export class LocalFileReader implements FileReaderStrategy {
    async read(path: string): Promise<string> {
        return fs.promises.readFile(path, 'utf-8');
    }
}
