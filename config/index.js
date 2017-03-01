'use strict';

const path = require('path');
const fs = require('fs');

const ENV = process.env.NODE_ENV || 'development';

module.exports = require('./' + ENV + '.json');
