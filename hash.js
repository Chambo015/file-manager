import { createReadStream } from 'fs'
import path from 'path';
import { stdout } from 'process';
import { createHash } from 'crypto';
import { parseInput } from '#main/parse-input.js';
import { currentlyDir } from '#main/main-messages.js';

export const hash = (input) => {
    const { firstArg } = parseInput(input);
    const file = path.resolve(process.cwd(), firstArg)
    try {
        const hash = createHash('sha256');
        const rs = createReadStream(file);
        rs.pipe(hash).setEncoding('hex').pipe(stdout)
        rs.on('end', () => {
            currentlyDir()
        })
    } catch (error) {
        console.log('Operation failed');
    }
}