import utils from '../utils/utils.js';
import { createReadStream } from 'fs';
import { resolve } from 'path';

async function read(path) {
  if (!path) {
    console.log('Please provide path');
    return
  }
  try {
    const resolvedPath = resolve(path);
    const isFileExist = await utils.isFileExist(resolvedPath);

    if (isFileExist) {
      const readStream = createReadStream(resolvedPath, 'utf-8');
      readStream.on('data', (chunk) => {
        console.log(chunk);
        utils.printWorkingDirectory();
      });
    } else {
      console.log(`There is no such file with path: ${resolvedPath}`);
    }
  } catch(err) {
    console.log('Operation failed');
    console.log(err);
  }
}

export default read;