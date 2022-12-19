import { resolve, parse } from 'path';
import { createWriteStream, createReadStream } from 'fs';
import utils from '../utils/utils.js';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream/promises';

async function compress(path, newPath) {
  if (!path || !newPath) {
    console.log('Please provide path and path where to compress');
    return;
  }
  try {
    const isFile = await utils.isFile(path);
    const isDirectory = await utils.isDirectory(newPath);

    if (!isFile) {
      console.log('There is no such file that you want to compress');
      return;
    }

    if (!isDirectory) {
      console.log('There is no such directory where you want to compress');
    }
    const resolvedPath = resolve(path);
    const { base } = parse(resolvedPath);
    const pathToZip = resolve(newPath, `${base}.br`);
    const readableStream = createReadStream(resolvedPath);
    const writeableStream = createWriteStream(pathToZip);
    const brotli = createBrotliCompress();
    await pipeline(readableStream, brotli, writeableStream);
    console.log('File compressed');
    utils.printWorkingDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
}

export default compress;