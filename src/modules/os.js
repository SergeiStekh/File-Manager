import { EOL, cpus, userInfo, arch } from 'os';
import utils from '../utils/utils.js';

const manipulateOs = {
  eol: () => {
    console.log(JSON.stringify(EOL));
    utils.printWorkingDirectory();
  },
  cpus: () => {
    const result = cpus().map(({ model, speed }) => {
      return { model, frequency: `${(speed / 1000).toFixed(1)} GHz` };
    });
    console.table(result);
    utils.printWorkingDirectory();
  },
  homedir: () => {
    console.log(userInfo().homedir)
    utils.printWorkingDirectory();
  },
  userName: () => {
    console.log(userInfo().username)
    utils.printWorkingDirectory();
  },
  architecture: () => {
    console.log(arch())
    utils.printWorkingDirectory();
  }
}

export default manipulateOs;