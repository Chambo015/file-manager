import { writeFile}  from 'fs/promises'
import path from 'path'


export const create = async (dirname, file) => {
    let trimFile = file.trim()
    let fileToCreate = (trimFile.split(' '))[1]

    try {
        await writeFile(path.join(dirname, fileToCreate), '', { flag: 'wx'})
        console.log( `\nYou are currently in ${dirname}` );
    } catch (error) {
        console.log('Operation failed');
        process.stdout.write('> ')
    }
};