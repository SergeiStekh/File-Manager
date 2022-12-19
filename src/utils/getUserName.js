import parseArguments from './parseArguments.js';

export default function getUserName() {
  if (parseArguments().hasOwnProperty('--username')) {
    return parseArguments()['--username'];
  }
  return 'unknown user';
}