import utils from 'util';
import path from 'path';
import fs from 'fs';

import * as core from '@actions/core';

const readFileAsync = utils.promisify(fs.readFile);

export const allowedExtensions = ['yaml', 'yml'];

export const fileName = 'launchpad';

export async function readFile (rootPath: string): Promise<{ contents: Buffer, type: 'yaml' }> {
  for (let i = 0; i < allowedExtensions.length; i++) {
    try {
      const ext = allowedExtensions[i];
      const fileContents = await readFileAsync(path.join(rootPath, `${fileName}.${ext}`));

      // Exit early if file found
      if (fileContents) {
        return {
          contents: fileContents,
          type: 'yaml'
        };
      }
    } catch (err) {
      core.debug(rootPath);
      core.debug(err.message);
    }
  }

  throw Error(`${fileName}.yaml not found.`);
}
