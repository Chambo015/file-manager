import os from 'os'



export const getOSInfo = (input) => {
    let trimInput = input.trim();
    let args = trimInput.split(' ')[1]
    if(args === '--EOL') return console.log(os.EOL);
    if(args === '--cpus') return console.log(os.cpus());;
    if(args === '--homedir') return console.log(os.homedir());;
    if(args === '--username') return console.log(os.userInfo().username);
    if(args === '--architecture') return console.log(os.arch());
    
}
    

export const cdDirname = async (dir) => {
    
}
