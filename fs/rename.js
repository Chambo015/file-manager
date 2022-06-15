import { existsSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';
import { parseInput } from '#main/parse-input.js';
import { currentlyDir } from '#main/main-messages.js';

export const rename = async (input) => {
    const { firstArg, secondArg } = parseInput(input);
    const oldFile = path.join(process.cwd(), firstArg);
    const newFile = path.join(process.cwd(), secondArg);

    try {
        if (existsSync(newFile)) throw new Error('operation failed');
        await fs.rename(oldFile, newFile);
        currentlyDir()
    } catch (err) {
        console.log('Operation failed');
    }
};
