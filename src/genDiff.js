import _ from 'lodash';
import parseFile from './parseFile.js';

export default (filepath1, filepath2) => {
  const parseFile1 = parseFile(filepath1);
  const parseFile2 = parseFile(filepath2);

  const entriesOfFile1 = Object.entries(_.cloneDeep(parseFile1))
    .sort()
    .map(([key, value]) => [`- ${key}`, value]);

  const rawResultsForFile2 = {};

  entriesOfFile1.forEach((entry) => {
    const [key, value] = entry;
    if (parseFile2[key.slice(2)]) {
      if (parseFile2[key.slice(2)] !== value) {
        rawResultsForFile2[entriesOfFile1.indexOf(entry)] = [`+ ${key.slice(2)}`, parseFile2[key.slice(2)]];
      } else {
        rawResultsForFile2[entriesOfFile1.indexOf(entry)] = [`  ${key.slice(2)}`, parseFile2[key.slice(2)]];
      }
    }
  });
  Object.keys(rawResultsForFile2).forEach((prop) => {
    if (rawResultsForFile2[prop][0].startsWith(' ')) {
      entriesOfFile1.splice(Number(prop), 1, rawResultsForFile2[prop]);
    } else {
      entriesOfFile1.splice(Number(prop) + 1, 0, rawResultsForFile2[prop]);
    }
  });

  const entriesOfFile2 = Object.entries(_.cloneDeep(parseFile2))
    .filter(([key]) => !parseFile1[key])
    .sort()
    .map(([key, value]) => [`+ ${key}`, value]);

  const result = _.sortBy(entriesOfFile1.concat(entriesOfFile2), (elem) => elem[0].slice(2));

  return Object.fromEntries(result);
};
