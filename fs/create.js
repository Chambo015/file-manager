import { writeFile }  from 'fs/promises'
import path from 'path'
import { parseInput } from '#main/parse-input.js';
import { currentlyDir } from '#main/main-messages.js';


export const create = async (input) => {
    const { firstArg } = parseInput(input);
    try {
        await writeFile(path.join(process.cwd(), firstArg), '', { flag: 'wx'})
        currentlyDir()
    } catch (error) {
        console.log('Operation failed');
    }
};