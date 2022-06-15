import os from 'os';
import { parseInput } from '#main/parse-input.js';
import { currentlyDir } from '#main/main-messages.js';

export const getOSInfo = (input) => {
  const { firstArg } = parseInput(input);
  switch (firstArg) {
    case '--EOL':
      console.log(os.EOL);
      currentlyDir();
      break;
    case '--cpus':
      console.table(os.cpus());
      currentlyDir();
      break;
    case '--homedir':
      console.log(os.homedir());
      currentlyDir();
      break;
    case '--username':
      console.log(os.userInfo().username);
      currentlyDir();
      break;
    case '--architecture':
      console.log(os.arch());
      currentlyDir();
      break;
    default:
      console.log('Operation failed');
  }
};
