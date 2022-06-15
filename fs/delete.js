import fs from 'fs/promises';
import path from 'path';
import { parseInput } from '#main/parse-input.js';
import { currentlyDir } from '#main/main-messages.js';

export const remove = async (input) => {
  const { firstArg } = parseInput(input);
    try {
        await fs.unlink(path.join(process.cwd(), firstArg))
        currentlyDir()
    } catch (error) {
        console.log('Operation failed');
    }
};