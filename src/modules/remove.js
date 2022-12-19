import { rm } from 'fs/promises';
import { resolve } from 'path';
import utils from '../utils/utils.js';

async function remove(path) {
  if (!path) {
    console.log('Please provide path to file to remove');
    return;
  }
  try {
    await rm(resolve(path));
    console.log(`File ${resolve(path)} is removed`);
    utils.printWorkingDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
}

export default remove;