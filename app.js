import readline from 'readline'

import { upDir, cDir } from './dirname.js';
import { getUserName , parseInput } from './parse-input.js';
import { list } from './fs/list.js';
import { read } from './fs/read.js';
import { create } from './fs/create.js';
import { rename } from './fs/rename.js';
import { copy, move } from './fs/copy.js';
import { remove } from './fs/delete.js';
import { getOSInfo } from './osInfo.js';
import { hash } from './hash.js'
import { compress, decompress } from './zip.js'
import { welcomeMsg, finalMsg } from './main-messages.js';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('close', () => {
    finalMsg()
})

rl.on('line', (i) => {
    if (i.trim() === '.exit') return rl.close();
    if (i.trim() === 'up') return upDir();
    if (i.trim() === 'ls') return list();
    if (parseInput(i).mainCommand === 'cd') return cDir(i);
    if (parseInput(i).mainCommand === 'cat') return read(i);
    if (parseInput(i).mainCommand === 'add') return create(i);
    if (parseInput(i).mainCommand === 'rn') return rename(i);
    if (parseInput(i).mainCommand === 'cp') return copy(i);
    if (parseInput(i).mainCommand === 'mv') return move(i);
    if (parseInput(i).mainCommand === 'rm') return remove(i);
    if (parseInput(i).mainCommand === 'os') return getOSInfo(i);
    if (parseInput(i).mainCommand === 'hash') return hash(i);
    if (parseInput(i).mainCommand === 'compress') return compress(i);
    if (parseInput(i).mainCommand === 'decompress') return decompress(i);
    console.log('Invalid input');
});

welcomeMsg();
