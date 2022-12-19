import { dirname, resolve } from 'path';
import { rename as generateName } from 'fs/promises';
import utils from '../utils/utils.js';

async function rename(oldPath, newPath) {
  if (!oldPath || !newPath) {
    console.log('Please provide old path and new path');
    return;
  }
  const oldResolvedPath = resolve(oldPath);
  const newResolvedPath = resolve(dirname(oldResolvedPath), newPath);
  try {
    await generateName(oldResolvedPath, newResolvedPath);
    console.log(`File ${oldResolvedPath} renamed to ${newResolvedPath}`);
    utils.printWorkingDirectory();
  } catch(error) {
    console.log('Operation failed');
  }
}

export default rename;