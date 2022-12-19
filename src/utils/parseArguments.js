import { argv } from 'node:process';

export default function parseArguments() {
  return Object.fromEntries(argv.slice(2).map(arg => arg.split('=')));
}
