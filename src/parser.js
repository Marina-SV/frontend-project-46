import { readFileSync } from 'node:fs';
import { extname } from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import yaml from 'js-yaml';

export default (pathToFile) => {
  const mapping = {
    yaml: yaml.load,
    yml: yaml.load,
    json: JSON.parse,
  };

  function constructAbsolutePath(originalPath) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    if (originalPath === __dirname) {
      return __dirname;
    }
    return originalPath;
  }

  const absolutePathToFile = constructAbsolutePath(pathToFile);
  const extension = extname(pathToFile).slice(1);
  const parser = mapping[extension];
  const rawData = readFileSync(absolutePathToFile, 'utf8');
  return parser(rawData);
};
