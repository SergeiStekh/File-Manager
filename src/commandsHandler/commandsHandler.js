import { add, up, cd, manipulateOs, read, rename, remove, move, list, copy, hash, compress, decompress } from '../modules/index.js'
import utils from '../utils/utils.js';
import commandsMap from './commandsMap.js'

async function commandsHandler(message) {
  const [command, arg1, arg2] = message.trim().split(' ');
  
  const { 
    ADD, 
    UP, 
    CD, 
    EOL, 
    CPUS, 
    HOME_DIR, 
    USER_NAME, 
    ARCHITECTURE,
    READ,
    RENAME,
    REMOVE,
    MOVE,
    LIST,
    COPY,
    HASH,
    COMPRESS,
    DECOMPRESS
  } = commandsMap;

  switch(command) {
    case ADD: add(arg1);
      break;
    case UP: up();
      break;
    case CD: cd(arg1);
      break;
    case EOL: manipulateOs.eol();
      break;
    case CPUS: manipulateOs.cpus();
      break;
    case HOME_DIR: manipulateOs.homedir();
      break;
    case USER_NAME: manipulateOs.userName();
      break;
    case ARCHITECTURE: manipulateOs.architecture();
      break;
    case READ: await read(arg1);
      break;
    case RENAME: await rename(arg1, arg2);
      break;
    case REMOVE: await remove(arg1);
      break;
    case MOVE: await move(arg1, arg2);
      break;
    case LIST: await list(arg1);
      break;
    case COPY: await copy(arg1, arg2);
      break;
    case HASH: await hash(arg1);
      break;
    case COMPRESS: await compress(arg1, arg2);
      break;
    case DECOMPRESS: await decompress(arg1, arg2);
      break;
    default: 
    console.table(commandsMap);
    console.log('There is no such command, try another one. Here is the at the top of that message');
    utils.printWorkingDirectory();
  }
}

export default commandsHandler;