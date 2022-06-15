import { copyFile, unlink } from 'fs/promises'
import path from 'path'
import { parseInput } from '#main/parse-input.js';
import { currentlyDir } from '#main/main-messages.js';

export const copy = async (input) => {
  const { firstArg, secondArg } = parseInput(input);
    let file = path.join(process.cwd(), firstArg)
    let newDirToCopy = path.resolve(process.cwd(), secondArg);
  try {
    await copyFile(file, newDirToCopy);
    currentlyDir()
  } catch (e) {
    console.log('Operation failed');
  }
};

export const move = async (input) => {
  const { firstArg } = parseInput(input);
  try {
    await copy(input)
    await unlink(path.join(process.cwd(), firstArg))
  } catch (e) {
    console.log('Operation failed');
  }
}