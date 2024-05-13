import { program } from 'commander';
import genDiff from './src/genDiff.js';

export default () => {
  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1', '-V, --version', 'output the version number')
    .helpOption('-h, --help', 'output usage information')
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format [type]', 'output format')
    .action((filepath1, filepath2) => {
      const diff = genDiff(filepath1, filepath2);
      console.log(JSON.stringify(diff, null, 4));
    });
  program.parse();
};
