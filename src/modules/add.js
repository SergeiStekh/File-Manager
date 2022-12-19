import { writeFile } from 'fs/promises'
import utils from '../utils/utils.js';

async function add(fileName) {
  if (!fileName) {
    console.log('Please provide name of the file');
    return;
  }
	try {
    const url = utils.getCurrentDirectory();
		await writeFile(`${url}/${fileName}`, '', {flag: 'wx'});
    console.log(`File with url ${url} created`);
	} catch(err) {
		console.log('Operation error');
	}
}

export default add;