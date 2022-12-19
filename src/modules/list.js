import { readdir } from 'fs/promises';
import { resolve } from 'path';
import utils from '../utils/utils.js';

async function list() {
  try {
		const dirContent = await readdir(resolve(utils.getCurrentDirectory()), { withFileTypes: true });
    const onlyDirs = [...dirContent].filter(de => de.isDirectory()).map(de => de.name).sort();
    const onlyFiles = [...dirContent].filter(de => de.isFile()).map(de => de.name).sort();
    const filesAndDirs = [];
		onlyDirs.forEach(el => {
      filesAndDirs.push({Name: el, Type: 'Directory'}); 
    });
    onlyFiles.forEach(el => {
      filesAndDirs.push({Name: el, Type: 'File'}); 
    });
    console.table(filesAndDirs);
    utils.printWorkingDirectory();
	} catch(error) {
    console.log('Operation failed');
	}
}

export default list;