/**
 * bdb.js - database backend for bcoin
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/raptoracle/bcoin
 */

'use strict';

const assert = require('bsert');
const DB = require('./db');
const Key = require('./key');
const MemDB = require('./memdb');
const Level = require('./level');

exports.DB = DB;
exports.Key = Key;

exports.create = (options) => {
  if (options == null)
    options = {};

  if (typeof options === 'string')
    options = { location: options };

  assert(options && typeof options === 'object');

  const {memory, location} = options;

  if (memory) {
    // @ts-ignore
    return new DB(MemDB, 'memory', options);
  }

  // @ts-ignore
  return new DB(Level, location, options);
};

exports.key = (id, args) => new Key(id, args);
