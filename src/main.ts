import * as core from '@actions/core';

import * as parser from './lib/parser';
import * as file from './lib/file';

async function run(): Promise<void> {
  try {
    const fileContents = await file.readFile(process.env.GITHUB_WORKSPACE as string);

    console.info(JSON.stringify(process.env));

    const parsedFile = await parser.parse(
      fileContents.contents,
      fileContents.type
    );

    core.setOutput('contents', parsedFile);
    core.setOutput('fileType', fileContents.type);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
