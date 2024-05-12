import { program } from 'commander';
import parseFile from './src/parseFile.js';

export default () => {
  program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1', '-V, --version', 'output the version number')
    .helpOption('-h, --help', 'output usage information')
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format [type]', 'output format')
    .action((filepath1, filepath2) => {
      const data1 = parseFile(filepath1);
      const data2 = parseFile(filepath2);
      console.log(data1);
      console.log(data2)
    });
  program.parse();
};
