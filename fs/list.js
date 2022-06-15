import { readdir } from 'fs/promises';
import { currentlyDir } from '#main/main-messages.js';

export const list = async (input) => {
  try {
    const arrFiles = await readdir(process.cwd());
    console.table(arrFiles);
    currentlyDir();
  } catch (error) {
    throw new Error('operation failed');
  }
};
