# grunt-livingstyleguide   [![Build Status](https://travis-ci.org/NexwayGroup/grunt-livingstyleguide.svg?branch=master)](https://travis-ci.org/NexwayGroup/grunt-livingstyleguide)

> Generate livingstyleguide with Grunt.    
Easily create living style guides/front-end style guides/pattern libraries by adding Markdown documentation to your Sass project.

## Style Guide Setup

First you have to install the livingstyleguide gem:

```shell
gem install livingstyleguide
```

[Livingstyleguide workshop](https://github.com/hagenburger/livingstyleguide-workshop)

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-livingstyleguide --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-livingstyleguide');
```

## The "livingstyleguide" task

### Overview
In your project's Gruntfile, add a section named `livingstyleguide` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  livingstyleguide: {
    generate: {
      options: {
        src: 'test/fixtures/styleguide.lsg'
      }
    }
  },
})
```

### Options

#### options.src
Type: `String`   
**Required*

The path to your livingstyleguide config file.

#### options.dest
Type: `String`   
Default value: `styleguide.html`   
**Optional*

The path to your destination file.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  livingstyleguide: {
    generate: {
      options: {
        src: 'test/fixtures/styleguide.lsg',
        dest: 'tmp/styleguide.html'
      }
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2015 Nexway Lab. Licensed under the MIT license.
