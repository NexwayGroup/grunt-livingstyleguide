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

var path = require('path'),
   spawn = require('win-spawn'),
   which = require('which');

module.exports = function (grunt) {

  var MODULE_NAME     = 'livingstyleguide',
      MODULE_DESC     = 'Easily create living style guides/front-end style guides/pattern libraries by adding Markdown documentation to your Sass project.',
      NEW_LINE        = '\n';

  grunt.registerMultiTask(MODULE_NAME, MODULE_DESC, function () {

    var done = this.async(),
      options = this.options(),
      files = this.files,
      cmd = options.terminal || 'livingstyleguide compile',
      configPath;

    // Check if the livingstyleguide is installed
    try {
      which.sync('livingstyleguide');
    } catch (err) {
      return grunt.warn(
        '\nYou need to have livingstyleguide installed and in your PATH for this task to work.\n' +
          '\nsudo gem install livingstyleguide\n'
      );
    }

    this.files.forEach(function (file) {

      var destPath = '';

      // Check if config file exists with '.lsg' extension
      if (file.src && path.extname(file.src) === '.lsg') {
        configPath = file.src;
      } else {
        return grunt.log.warn(
          NEW_LINE + 'You must provide a source path to your livingstyleguide config file. (ex. "styleguide.lsg")' + NEW_LINE
        );
      }

      // Check if destination path was set with '.html' extension
      if (file.dest) {
        destPath = file.dest;
        var isExt = path.extname(destPath);

        if (isExt !== '.html') {
          return grunt.log.warn(
            NEW_LINE + 'You must provide an extension (html) of the destination path to your livingstyleguide (ex. "styleguide.html")' + NEW_LINE
          );
        }

        grunt.file.write(destPath);
      }

      // Run livingstyleguide
      var cp = spawn(cmd, [configPath, destPath], {stdio: 'inherit'});

      grunt.log.writeln('Compiling... ' + NEW_LINE + cmd + ' ' + configPath + ' ' +  destPath + '');

      cp.on('error', function (err) {
        done(err);
      });

      cp.on('close', function (code) {
        if (code > 0) {
          done(new Error('Exited with error code ' + code));
          grunt.log.warn(
            NEW_LINE + 'try "git init"' + NEW_LINE
          );
        } else {
          done();
        }
      });

    });

  });

};
