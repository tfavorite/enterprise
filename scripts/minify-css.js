#!/usr/bin/env node

/**
 * This script is a command line wrapper for `css-min`, which will
 * minify the CSS generated by the IDS Enterprise build system.
 */

// -------------------------------------
// Requirements
// -------------------------------------
const cssmin = require('cssmin');
const commandLineArgs = require('yargs').argv;

const logger = require('./logger');
const getFileContents = require('./build/get-file-contents');
const writeFile = require('./build/write-file');

const config = require('./configs/cssmin').cssmin;

// -------------------------------------
// Functions
// -------------------------------------

function minify(srcFilePath, targetFilePath) {
  const css = getFileContents(srcFilePath);
  const minified = cssmin(css);
  return writeFile(targetFilePath, minified).then((err) => {
    if (err) {
      logger('error', `Error minifying "${srcFilePath}": ${err}`);
      return;
    }
    // Only log if not in --verbose mode (file logger has more detailed results)
    if (!commandLineArgs.verbose) {
      logger('success', `Successfully minified "${targetFilePath}"`);
    }
  });
}

function minifyCSS() {
  return new Promise((resolve, reject) => {
    if (!config.dist || !config.dist.files) {
      throw new Error('Need to have target CSS files passed in for minifier');
    }

    const files = Object.keys(config.dist.files);
    const processes = [];

    files.forEach((targetFileName) => {
      const srcFileName = config.dist.files[targetFileName][0];
      processes.push(minify(srcFileName, targetFileName));
    });

    return Promise.all(processes).then(() => {
      resolve();
    }).catch((e) => {
      reject(e);
    });
  });
}

// -------------------------------------
// Main
// -------------------------------------
module.exports = minifyCSS();