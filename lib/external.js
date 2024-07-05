/**
 * external.js - database backend for bcoin
 * Copyright (c) 2024, raptoracle devs (MIT License).
 * https://github.com/raptoracle/bcoin
 */

'use strict';

const assert = require('bsert');
const mongoose = require('mongoose');
const OPTIONS = Object.create(null);

/**
 * ExternalDB
 */

class ExternalDB {
  constructor(options) {
    if (options == null)
      options = OPTIONS;

    assert(options && typeof options === 'object');
  }

  open(options, callback) {
    if (options == null)
      options = OPTIONS;

    assert(options && typeof options === 'object');
    assert(typeof callback === 'function');

  }

  close(callback) {
    assert(typeof callback === 'function');

  }

  put(key, value, callback) {
    assert(isValue(key));
    assert(isValue(value));
    assert(typeof callback === 'function');

  }

  get(key, callback) {
    assert(isValue(key));
    assert(typeof callback === 'function');

  }

  del(key, callback) {
    assert(isValue(key));
    assert(typeof callback === 'function');

  }

  batch(ops, callback) {
    if (ops == null)
      return new Batch(this);

    assert(Array.isArray(ops));
    assert(typeof callback === 'function');

    for (const op of ops) {
      assert(op && typeof op === 'object');
      assert(op.type === 'put' || op.type === 'del');
      assert(isValue(op.key));

      if (op.type === 'put')
        assert(isValue(op.value));
    }



    return undefined;
  }

}

/*
 * Static
 */

ExternalDB.mongo = true;


/**
 * Batch
 */

class Batch {
    constructor(db) {

    }
  
    put(key, value) {
      assert(isValue(key));
      assert(isValue(value));
  

    }
  
    del(key) {
      assert(isValue(key));
  
    }
  
    clear() {
    }
  
    write(callback) {
      assert(typeof callback === 'function');
  
    }
  }

/*
 * Helpers
 */

  function isValue(key) {
    return Buffer.isBuffer(key) || typeof key === 'string';
  }

/*
 * Expose
 */

module.exports = ExternalDB;