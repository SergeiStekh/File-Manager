import { resolve } from 'path';
import { chdir } from 'process';
import utils from '../utils/utils.js';

export default function cd(path) {
  if (!path) {
    console.log('Provide the right path please');
    return;
  }

  try {
    chdir(resolve(path));
    console.log(`You are at ${utils.getCurrentDirectory()}`);
  } catch(err) {
    console.log(`No such file or directory: ${err.dest}`);
  }
}