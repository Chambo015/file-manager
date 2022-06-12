import { existsSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';

export const rename = async (dirname, input) => {
    let trimInput = input.trim();
    let fileToCreate = trimInput.split(' ')[1];
    let oldFile = path.join(dirname, trimInput.split(' ')[1]);
    let newFile = path.join(dirname, trimInput.split(' ')[2]);

    try {
        if (existsSync(newFile)) throw new Error('operation failed');
        await fs.rename(oldFile, newFile);
        console.log( `\nYou are currently in ${dirname}` );
    } catch (err) {
        console.log('Operation failed');
        process.stdout.write('> ')
    }
};
