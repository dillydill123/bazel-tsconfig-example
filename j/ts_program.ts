import isNumber from "is-number";
import { greet } from "./ts_module";
const nodeVersion = process.version;
const isNumberTest = 42;
console.log("Hello, Bazel with rules_ts!");
console.log(`Node.js version: ${nodeVersion}`);
console.log(`isNumberTest: ${isNumber(isNumberTest)}`);
console.log(greet());