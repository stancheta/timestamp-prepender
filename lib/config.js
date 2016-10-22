// Config file for timestamp-prepender
//
// From the FlywayDB Docs:
//
// The file name consists of:
// - prefix: Configurable, default: V for versioned migrations, R for repeatable migrations
// - version: (Versioned migrations only) Dots or underscores separate as many parts as you like
// - separator: Configurable, default: __ (two underscores)
// - description: Underscores or spaces separate the words
// - suffix: Configurable, default: .sql

module.exports = {
  config: {
    prefix: 'V',
    versionSeparator: '',
    separator: '__',
    descSeparator: '_'
    suffix: '.sql'
  }
};
