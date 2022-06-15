export const getUserName = () => {
    const args = process.argv.slice(2)
    const userName = args[0].slice(args[0].indexOf('=') + 1)
    return userName
}

/**
 * 
 * @param {string} input 
 */
export const parseInput = (input) => {
    const parseArr  = input.split(' ')
    const [mainCommand = null, firstArg = null, secondArg = null] = parseArr

    return {
        mainCommand,
        firstArg,
        secondArg
    }
    
}