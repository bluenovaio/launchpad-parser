import * as path from 'path';

import * as file from '../file';

describe('readFile', function () {
  file.allowedExtensions.forEach((ext) => {
    it(`properly reads file for .${ext}`, async () => {
      expect(await file.readFile(path.join(__dirname, 'examples', ext))).toEqual(expect.objectContaining({
        contents: expect.any(Buffer),
        type: 'yaml'
      }));
    });
  });

  it('throws if file not found', () => {
    expect(file.readFile(path.join(__dirname, 'examples', 'empty')))
      .rejects
      .toThrow('launchpad.yml not found.');
  });
});
