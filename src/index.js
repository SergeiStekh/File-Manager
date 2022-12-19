import EventEmitter from 'node:events';
import utils from './utils/utils.js';
import { commandsHandler } from './modules/index.js';
import { exit } from 'process';
import { stdin as input, stdout as output } from 'node:process';
import * as readline from 'node:readline/promises';

class FileManager {
  constructor() {
    this.eventEmitter = new EventEmitter().setMaxListeners(0);
    this.userName = utils.getUserName();
  }

  init() {
    utils.goToHomeDirectory();
    this.welcomeUser();
    this.initReadline();
  }
  
  welcomeUser() {
    this.printMessage(`Welcome to File Manager, ${this.userName}`);
    this.printMessage(`You are at ${utils.getWorkingDirectory()} now.`);
    this.printMessage(`Please enter the command in CLI:`);
  }

  initReadline() {
    this.rl = readline.createInterface({ input, output });
    this.rl.on('line', (message) => commandsHandler(message));
    this.rl.on('SIGINT', () => {
      console.log(`Thank you for using File Manager, ${this.userName}!`);
      exit();
    });
    return Promise.resolve();
  }

  printMessage(message) {
    console.log(message);
  }
};

new FileManager().init();