import EventEmitter from 'node:events';
import { homedir } from 'node:os';
import { chdir } from 'node:process';
import { add } from './modules/index.js';
import { getUserName } from './utils/index.js';

chdir(homedir());

const userName = getUserName();