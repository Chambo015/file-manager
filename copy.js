import { copyFile } from 'fs/promises'
import path from 'path'

export const copy = async (dirname, input) => {
    let trimInput = input.trim();
    let file = trimInput.split(' ')[1]
    let newDirToCopy = path.resolve(dirname, trimInput.split(' ')[2]);
  try {
    await copyFile(path.join(dirname, file), path.resolve(dirname, newDirToCopy, file))
    console.log( `\nYou are currently in ${dirname}` );
  } catch (e) {
    console.log('Operation failed');
    process.stdout.write('> ')
  }
};