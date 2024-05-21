import { FileReaderStrategy } from './FileReaderStrategy';
import axios from 'axios';

export class URLFileReader implements FileReaderStrategy {
    async read(path: string): Promise<string> {
        const response = await axios.get(path);
        return response.data;
    }
}
