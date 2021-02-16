"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const yaml_1 = __importDefault(require("yaml"));
function parse(contents, type) {
    // @todo Future add in validation that will prevent possible issues
    return yaml_1.default.parse(contents.toString());
}
exports.parse = parse;
//# sourceMappingURL=parser.js.map