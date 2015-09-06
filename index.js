/* jshint node: true */
'use strict';
var Grunticon = require( 'grunticon-lib' );
var defaults = require('lodash').defaults;
var glob = require('glob');
var RSVP = require('rsvp');

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
    var config = this.project.config(process.env.EMBER_ENV || 'development').grunticon;

    var srcPattern = config.src || "grunticon/src/+(*.svg|*.png)";
    var dest = config.dest || "public/grunticon";
    var options = { enhanceSVG: true };

    var promise = new RSVP.Promise(function(resolve, reject) {

      try {
        var files = glob.sync(srcPattern, null);

        var grunticon = new Grunticon( files, dest, options );

        grunticon.process(function() {
          resolve();
        });
      }
      catch(err) {
        reject(error);
      }
    });

    return promise;
  }
};

