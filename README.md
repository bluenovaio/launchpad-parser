# launchpad-parser

Github Action for parsing the "launchpad.yaml" file for [LaunchPad](https://github/bluenovaio/launchpad).

## Usage

You can drop in the launchpad-parser action to parse the launch-pad file and pull
out configuration values using the `fromJson` built-in function.

```yaml
name: Test launchpad job
on:
  push

jobs:
  testJob:
    name: Test
    runs-on: ubuntu-latest
    steps:
      - id: parseConfig
        use: bluenovaio/launchpad-parser 
      - run: |
          echo "${{fromJson(steps.parseConfig.outputs.contents).version}}"
```
