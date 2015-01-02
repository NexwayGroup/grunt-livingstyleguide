/*
 * grunt-livingstyleguide
 * https://github.com/NexwayGroup/grunt-livingstyleguide
 *
 * Copyright (c) 2015 Nexway Lab.
 * Licensed under the MIT license.
 *
 * @author Damian Duda <dduda@nexway.com>
 */

'use strict';

var path  = require('path'),
    which = require('which');

module.exports = function (grunt) {

  var MODULE_NAME     = 'livingstyleguide',
      MODULE_DESC     = 'Easily create living style guides/front-end style guides/pattern libraries by adding Markdown documentation to your Sass project.',
      NEW_LINE        = '\n';

  grunt.registerMultiTask(MODULE_NAME, MODULE_DESC, function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var done     = this.async(),
        options  = this.options({
          dest: 'docs/styleguide.html'
        }),
        commmand = 'livingstyleguide',
        compile  = 'compile';

    // Check if the livingstyleguide is installed
    try {
      which.sync('livingstyleguide');
    } catch (err) {
      return grunt.log.error(
        NEW_LINE +'You need to have livingstyleguide installed and in your PATH for this task to work.' + NEW_LINE + 'sudo gem install livingstyleguide' + NEW_LINE
      );
    }

     // Make sure config file exists with '.lsg' extension
    if (!grunt.file.exists(options.src) || path.extname(options.src)  !== '.lsg') {
      return grunt.log.error('Config file "' + options.src + '" not found or incorrect extension (ex. "styleguide.lsg").');
    }

    // Check if destination path was set with '.html' extension
    if (options.dest) {
      if (path.extname(options.dest) !== '.html') {
        return grunt.log.error(
          NEW_LINE + 'You must provide correct extension (html) of the destination path to your livingstyleguide (ex. "styleguide.html")' + NEW_LINE
        );
      }

      grunt.file.write(options.dest);
    }

    grunt.log.writeln('\'' + commmand + ' ' + compile + ' ' + options.src + ' ' +  options.dest + '\'');

    var livingProcess = {
      cmd: commmand,
      args: [compile, options.src, options.dest]
    };

    function livingDone(error, result, code) {
      if (result.stdout) {
        grunt.log.ok(String(result));
      }
      if (error) {
        return done(error);
      } else {
        return done();
      }
    }

    // Run livingstyleguide
    grunt.util.spawn(livingProcess, livingDone);

  });

};
