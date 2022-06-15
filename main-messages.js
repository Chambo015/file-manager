import { getUserName } from './parse-input.js'

export const currentlyDir = () => {
    console.log(`\nYou are currently in ${process.cwd()}`);
}

export const welcomeMsg = () => {
    console.log('\x1b[48;5;3m Welcome to the File Manager \x1b[0m,\x1b[48;5;4m %s \x1b[0m', getUserName());
    currentlyDir()
}

export const finalMsg = () => {
    console.log('\n\x1b[48;5;18m Thank you for using File Manager \x1b[0m,\x1b[48;5;4m %s \x1b[0m', getUserName());
}

