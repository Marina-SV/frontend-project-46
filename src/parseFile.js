import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export default (pathToFile) => {
  // const extension = extname(pathToFile).slice(1);

  function constructAbsolutePath(originalPath) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    if (originalPath === __dirname) {
      return __dirname;
    }
    return originalPath;
  }

  const absolutePathToFile = constructAbsolutePath(pathToFile);
  const rowData = readFileSync(absolutePathToFile, 'utf8');

  return JSON.parse(rowData);
};
