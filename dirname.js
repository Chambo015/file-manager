import os from 'os'
import path from 'path'
import fs from 'fs/promises'

const homedir = os.homedir()

export let getDirname = homedir

export const upDirname = () => {
    getDirname = path.normalize(getDirname + '/..')
    return getDirname
}

export const cdDirname = async (dir) => {
    let trimDir = dir.trim()
    let parseDir = trimDir.slice(trimDir.indexOf(' ') + 1)
    try {
        let stat = await fs.stat(path.join(getDirname, parseDir))

        if(stat.isDirectory()) {
            getDirname = path.join(getDirname, parseDir)
            console.log( `\nYou are currently in ${getDirname}` );
            return getDirname
        } else {
            console.log('Invalid input');
        }
    } catch (e) {
        console.log('Operation failed');
        process.stdout.write('> ')
    }
}
