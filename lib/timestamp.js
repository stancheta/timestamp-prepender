// module for creating a timestamp for dates down to the millisecond

const c = require('./config');
const config = c.config;

exports.getTimeStamp = function() {
  const now = new Date();
  let timestamp = [];

  // inserting date
  timestamp.push(now.getFullYear());
  timestamp.push(now.getMonth() + 1);
  timestamp.push(now.getDate());

  // inserting time
  timestamp.push(now.getHours());
  timestamp.push(now.getMinutes());
  timestamp.push(now.getSeconds());
  timestamp.push(now.getMilliseconds());

  // pad any items < 10 for a standard timestamp length
  for (let i = 1; i < timestamp.length - 1; i++) {
    timestamp[i] = ('00' + timestamp[i]).slice(-2);
  }

  // pad milliseconds < 100 for standard timestamp length
  timestamp[timestamp.length - 1] = ('000' + timestamp[timestamp.length - 1]).slice(-3);

  return timestamp.join(config.versionSeparator);
}
