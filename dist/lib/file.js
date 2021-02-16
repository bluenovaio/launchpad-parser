"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = exports.fileName = exports.allowedExtensions = void 0;
const util_1 = __importDefault(require("util"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const core = __importStar(require("@actions/core"));
const readFileAsync = util_1.default.promisify(fs_1.default.readFile);
exports.allowedExtensions = ['yaml', 'yml'];
exports.fileName = 'launchpad';
async function readFile(rootPath) {
    for (let i = 0; i < exports.allowedExtensions.length; i++) {
        try {
            const ext = exports.allowedExtensions[i];
            const fileContents = await readFileAsync(path_1.default.join(rootPath, `${exports.fileName}.${ext}`));
            // Exit early if file found
            if (fileContents) {
                return {
                    contents: fileContents,
                    type: 'yaml'
                };
            }
        }
        catch (err) {
            core.debug(err.message);
        }
    }
    throw Error(`GITHUB/${rootPath}/${exports.fileName}.yaml not found.`);
}
exports.readFile = readFile;
//# sourceMappingURL=file.js.map