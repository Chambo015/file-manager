import { readFile } from 'fs/promises'
import path from 'path'

export const read = async (dirname, file) => {
    let trimFile = file.trim()
    let fileToRead = trimFile.slice(trimFile.indexOf(' ') + 1)
    try {
        const data = await readFile(path.join(dirname, fileToRead), 'utf-8')
        console.log(data)
        console.log( `\nYou are currently in ${dirname}` );
    } catch (error) {
        console.log('Operation failed');
        process.stdout.write('> ')
    }
};