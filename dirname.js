import os from 'os'
import path from 'path'
import fs from 'fs/promises'
import { currentlyDir } from './main-messages.js';
import { parseInput } from './parse-input.js';

const startHomedir = os.homedir()
process.chdir(startHomedir)

export const upDir = () => {
    process.chdir('../')
    currentlyDir()
    return process.cwd()
}

export const cDir = async (input) => {
    const prePath = process.cwd()
    const { firstArg } = parseInput(input)
    try {
        process.chdir(firstArg)
        let stat = await fs.stat(process.cwd())

        if(stat.isDirectory()) {
            currentlyDir()
            return process.cwd()
        } else {
            process.chdir(prePath)
            console.log('Invalid input');
        }
    } catch (e) {
        process.chdir(prePath)
        console.log('Operation failed');
    }
}
