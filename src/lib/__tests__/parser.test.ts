import * as path from 'path';
import * as util from 'util';
import * as fs from 'fs';

const readFileAsync = util.promisify(fs.readFile);

import * as parser from '../parser';

describe('parse', () => {
  it('correctly parses a launchpad file', async () => {
    const file = await readFileAsync(path.join(__dirname, 'examples', 'standard', 'launchpad.yaml'));
    expect(await parser.parse(file, 'yaml')).toEqual({
      version: 'v1.0',
      name: 'launchpad-example',
      registry: 'gcr.io/<project-id>/launchpad-example',
      defaults: {
        min: 0,
        max: 5,
      },
      environments: {
        preview: {
          min: 0,
          max: 1,
          environmentVariables: {}
        },
        preProduction: {
          environmentVariables: {}
        },
        production: {
          environmentVariables: {}
        }
      }
    });
  });
});
