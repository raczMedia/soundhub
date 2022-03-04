/* eslint-disable no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

exports.config = {
  specs: ["./tests/e2e/features/*.feature"],
  logLevel: "trace",
  outputDir: path.join(__dirname, "tests/e2e/logs"),
  bail: 0,
  waitforTimeout: 1000,

  specFileRetries: 0,
  specFileRetriesDeferred: false,
  reporters: ["spec"],
  framework: "cucumber",
  cucumberOpts: {
    requireModule: ["@babel/register"],
    require: ["./tests/e2e/step-definitions/*.ts"],
  },
};
