export const getUserName = () => {
    const args = process.argv.slice(2)
    const userName = args[0].slice(args[0].indexOf('=') + 1)
    return userName
}