import fs from 'fs/promises';
import path from 'path';

export const remove = async (dirname, input) => {
    let trimInput = input.trim();
    let file = trimInput.split(' ')[1]
    try {
        await fs.unlink(path.join(dirname, file))
        console.log( `\nYou are currently in ${dirname}` );
    } catch (error) {
        console.log('Operation failed');
        process.stdout.write('> ')
    }
};