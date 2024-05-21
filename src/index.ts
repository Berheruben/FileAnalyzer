import { FileReader } from "./fileReader";

interface FileStatistics {
    totalWords: number;
    totalLetters: number;
    totalSpaces: number;
    repeatedWords: Record<string, number>;
}
// Analizza il contenuto del file per calcolare le statistiche.
export const analyzeContent = (content: string): FileStatistics => {
    const words = content.split(/\s+/);
    const totalWords = words.length;
    const totalLetters = content.replace(/\s+/g, '').length;
    const totalSpaces = (content.match(/\s/g) || []).length;

    const wordCount: Record<string, number> = {};
    for (const word of words) {
        const lowerWord = word.toLowerCase();
        if (wordCount[lowerWord]) {
            wordCount[lowerWord]++;
        } else {
            wordCount[lowerWord] = 1;
        }
    }

    const repeatedWords: Record<string, number> = {};
    for (const [word, count] of Object.entries(wordCount)) {
        if (count > 10) {
            repeatedWords[word] = count;
        }
    }

    return {
        totalWords,
        totalLetters,
        totalSpaces,
        repeatedWords,
    };
};
// Legge il contenuto del file e calcola le statistiche.
const getFileStatistics = async (path: string): Promise<FileStatistics> => {
    const fileReader = new FileReader(path);
    const content = await fileReader.read(path);
    return analyzeContent(content);
};
// Funzione principale che gestisce l'input dell'utente e avvia l'analisi del file.
const main = async () => {
    const path = process.argv[2];
    if (!path) {
        console.error('Please provide a file path or URL as an argument.');
        process.exit(1);
    }

    try {
        const stats = await getFileStatistics(path);
        console.log('File Statistics:', stats);
    } catch (error:any) {
        console.error('Error reading or processing file:', error.message);
    }
};

main();
