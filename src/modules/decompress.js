import { resolve, parse } from 'path';
import { createWriteStream, createReadStream } from 'fs';
import utils from '../utils/utils.js';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';

async function decompress(path, newPath) {
  if (!path || !newPath) {
    console.log('Please provide path and path where to decompress');
    return;
  }
  try {
    const isFile = await utils.isFile(path);
    const isDirectory = await utils.isDirectory(newPath);

    if (!isFile) {
      console.log('There is no such file that you want to decompress');
      return;
    }

    if (!isDirectory) {
      console.log('There is no such directory where you want to decompress');
    }
    const resolvedPath = resolve(path);
    const { name } = parse(resolvedPath);
    const pathToUnzip = resolve(newPath, name);
    const readableStream = createReadStream(resolvedPath);
    const writeableStream = createWriteStream(pathToUnzip);
    const brotli = createBrotliDecompress();
    await pipeline(readableStream, brotli, writeableStream);
    console.log('File decompressed');
    utils.printWorkingDirectory();
  } catch (error) {
    console.log(error)
    console.log('Operation failed');
  }
}

export default decompress;