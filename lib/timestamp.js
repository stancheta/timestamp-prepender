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
  for (let i = 0; i < timestamp.length; i++) {
    if (timestamp[i] < 10) {
      timestamp[i] = '0' + timestamp[i];
    }
  }

  // pad milliseconds < 100 for standard timestamp length
  if (timestamp[timestamp.length -1].length < 3) {
      timestamp[timestamp.length -1] = '0' + timestamp[timestamp.length -1];
  }

  return timestamp.join(config.versionSeparator);
}
