#! /usr/bin/env node

const c = require('./config');
const config = c.config;
const fs = require('fs');
const ts = require('./timestamp');

const userArgs = Array.prototype.slice.call(process.argv.slice(2));

let filename = config.prefix + ts.getTimeStamp() + config.separator;

filename += userArgs.length > 0 ? userArgs.join(config.descSeparator) : 'No_description.sql';

if (filename.indexOf(config.suffix) === -1) { filename += config.suffix; }

fs.writeFile(filename, '', (err) => {
  if (err) { return console.log(err); }
})
