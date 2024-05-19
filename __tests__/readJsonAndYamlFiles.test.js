import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { expect, test } from '@jest/globals';
import parseFile from '../src/parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('readFile1Yaml', () => {
  const file1Path = getFixturePath('file1.yaml');
  const content = parseFile(file1Path);
  expect(content).toEqual({
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  });
});

test('readFile2Json', () => {
  const file2Path = getFixturePath('file2.json');
  const content = parseFile(file2Path);
  expect(content).toEqual({
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  });
});
