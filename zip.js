import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import {createReadStream,createWriteStream} from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { parseInput } from '#main/parse-input.js';
import { currentlyDir } from '#main/main-messages.js';
import path from 'path';

const pipe = promisify(pipeline);

export async function compress(input) {
  try {
    const { firstArg, secondArg } = parseInput(input);
    const file = path.join(process.cwd(), firstArg);
    const pathDestination = path.resolve(process.cwd(), secondArg);

    const BrotliCompress = createBrotliCompress();
    const source = createReadStream(file);
    const destination = createWriteStream(pathDestination);
    
    await pipe(source, BrotliCompress, destination);
    currentlyDir()
  } catch (error) {
    console.log('Operation failed');
  }
}

export async function decompress(input) {
    try {
      const { firstArg, secondArg } = parseInput(input);
      const file = path.join(process.cwd(), firstArg);
      const pathDestination = path.resolve(process.cwd(), secondArg);
  
      const BrotliDecompress = createBrotliDecompress();
      const source = createReadStream(file);
      const destination = createWriteStream(pathDestination);
      
      await pipe(source, BrotliDecompress, destination);
      currentlyDir()
    } catch (error) {
      console.log('Operation failed');
    }
  }
