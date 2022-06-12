import { readdir } from 'fs/promises'

export const list = async (path) => {
    try {
        const arrFiles = await readdir(path)
        console.log(arrFiles);
        console.log( `\nYou are currently in ${path}` );
    } catch (error) {
        throw new Error('operation failed')
    }
};