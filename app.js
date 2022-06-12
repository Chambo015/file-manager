import { getDirname, upDirname, cdDirname } from './dirname.js'
import { getUserName } from './parseUserName.js'
import { list } from './list.js'
import { read } from './read.js'
import { create } from './create.js'






console.log(`Welcome to the File Manager, %s \n`, getUserName());
console.log( `You are currently in ${getDirname}` );



process.on('SIGINT', () => {
    process.exit()
});
process.on('exit', () => {
    console.log('Thank you for using File Manager, %s', getUserName());
});

process.stdin.setEncoding('utf-8')
process.stdin.on('data', chunk => {
    if (chunk.trim() == 'up') {
        upDirname()
        console.log( `\nYou are currently in ${getDirname}` );

    } else if(chunk.trim() == 'ls') {
        list(getDirname)

    } else if(/^cd\s/.test(chunk.trim())) {
        cdDirname(chunk.trim())

    } else if(/^cat\s/.test(chunk.trim())) {
        read(getDirname , chunk)

    } else if(/^add\s/.test(chunk.trim())) {
        create(getDirname, chunk)
        
    }
})

// Доделаю работу позже ....