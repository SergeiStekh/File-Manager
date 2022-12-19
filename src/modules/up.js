import { chdir } from 'process';
import utils from '../utils/utils.js';

export default function up() {
  try {
    chdir('../');
    console.log(`You are at ${utils.getCurrentDirectory()}`);
  } catch {
    throw new Error('Operation failed');
  }
}