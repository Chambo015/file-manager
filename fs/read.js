import { createReadStream } from 'fs';
import path from 'path';
import { parseInput } from '#main/parse-input.js';
import { currentlyDir } from '#main/main-messages.js';

export const read = async (input) => {
  const { firstArg } = parseInput(input);
  try {
    const rs = createReadStream(
      path.join(process.cwd(), firstArg)
    );
    rs.pipe(process.stdout);
    rs.on('end', () => {
        currentlyDir()
    });

    rs.on('error', (err) => {
        throw err
    })
  } catch (error) {
    console.log('Operation failed');
  }
};
