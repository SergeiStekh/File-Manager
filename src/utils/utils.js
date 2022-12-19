import { argv } from 'node:process';
import { chdir } from 'node:process';
import { homedir } from 'node:os';
import { stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const utils = {
  parseArguments: () => Object.fromEntries(argv.slice(2).map(arg => arg.split('='))),
  getUserName: () => utils.parseArguments()['--username'] ? utils.parseArguments()['--username'] : 'unknown user',
  goToHomeDirectory: () => chdir(homedir()),
  getWorkingDirectory: () => homedir().trim(),
  printWorkingDirectory: () => console.log(`You are now at ${utils.getWorkingDirectory()}`),
  getCurrentDirectory: () => process.cwd(),
  isFileExist: async (path) => {
    try {
      const statsObject = await stat(path);
      if (!statsObject.isFile()) {
        return false;
      } else {
        return true;
      }
    } catch {
      return false;
    }
  },
  isFile: async (path) => {
    try {
      const statObject = await stat(resolve(path));
      return statObject.isFile();
    } catch(error) {
      return false;
    }
  },
  isDirectory: async (path) => {
    try {
      const statObject = await stat(resolve(path));
      return statObject.isDirectory();
    } catch {
      return false;
    }
  }
}

export default utils;