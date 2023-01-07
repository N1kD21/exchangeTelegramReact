'use strict';

const main = require('../lib/readFile.js');

// eslint-disable-next-line no-undef
test('the data is peanut butter', async () => {
  // eslint-disable-next-line no-undef
  await expect(main('../lib/index.html')).resolves.not.toStrictEqual('1');
});

