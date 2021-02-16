/// <reference types="node" />
export declare const allowedExtensions: string[];
export declare const fileName = "launchpad";
export declare function readFile(rootPath: string): Promise<{
    contents: Buffer;
    type: 'yaml';
}>;
