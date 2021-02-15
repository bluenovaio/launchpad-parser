import YAML from 'yaml';

export function parse (contents: Buffer, type: 'yaml') {
  // @todo Future add in validation that will prevent possible issues
  return YAML.parse(contents.toString());
}
