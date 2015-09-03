/* jshint node: true */
'use strict';
var grunt = require('grunt');
var chalk = require('chalk');
var defaults = require('lodash').defaults;
var error = chalk.red,
    warn = chalk.orange,
    success = chalk.green;

var DEFAULT_CONFIG = {};

module.exports = {
  name: 'ember-cli-grunticon',
  config: function(env, config) {
    if(!!!this.app.options.grunticon) {
      throw new Error('grunticon settings must be defined in your ember-cli-build.js. See https://github.com/sparkbox/ember-cli-grunticon#configure');
    }

    config.grunticon = this.app.options.grunticon;

    config.grunticon = defaults(config.grunticon, DEFAULT_CONFIG);

    return config;
  },
  preBuild: function(result) {

    grunt.task.init = function() {};

    var config = this.project.config(process.env.EMBER_ENV || 'development').grunticon;

    grunt.initConfig( {grunticon: config} );
    grunt.loadNpmTasks('grunt-grunticon');

    grunt.tasks(['grunticon']);
  }
};

