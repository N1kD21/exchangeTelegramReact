'use strict';

const fs = require('node:fs');

// eslint-disable-next-line arrow-parens
const main = async (path) => {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    return data;
  } catch (error) {
    return 'Error';
  }
};
module.exports = main;
