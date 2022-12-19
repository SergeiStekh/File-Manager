import { createHash } from 'crypto'
import { readFile } from 'fs/promises'
import { resolve } from 'path';
import utils from '../utils/utils.js';

async function hash(path) {
  if (!path) {
    console.log('Please provide path');
    utils.printWorkingDirectory();
    return;
  }
  try {
    const content = await readFile(resolve(path));
    const data = createHash('sha256').update(content);
    console.log(data.digest('hex'));
    utils.printWorkingDirectory();
  } catch {
      console.log('Operation failed');
      utils.printWorkingDirectory();
  }
}

export default hash;