import { readFileSync } from 'node:fs';
import { extname, resolve } from 'node:path';
import { cwd } from 'node:process';

export default (pathToFile) => {
  const extension = extname(pathToFile).slice(1);

  function constructAbsolutePath(originalPath) {
    const workingDirPath = cwd();
    const absolutePath = resolve(originalPath, workingDirPath);

    if (originalPath === absolutePath) {
      return absolutePath;
    }
    return originalPath;
  }

  const absolutePathToFile = constructAbsolutePath(pathToFile);
  const rowData = readFileSync(absolutePathToFile, 'utf8');

  if (extension === 'json') {
    return JSON.parse(rowData);
  }
};
