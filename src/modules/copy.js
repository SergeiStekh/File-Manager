import { resolve, parse } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import utils from '../utils/utils.js';

async function copy(path, newPath) {
  if (!path || !newPath) {
    console.log('Please provide path and path where to copy');
    return;
  }
  const resolvedPath = resolve(path);
  const { base } = parse(resolvedPath);
  const whereToCopy = resolve(newPath, base);
  try {
    const readStream = createReadStream(resolvedPath);
    const writeStream = createWriteStream(whereToCopy);
    await pipeline(readStream, writeStream);
    console.log('File copied!')
    utils.printWorkingDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
}

export default copy;