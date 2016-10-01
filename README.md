# Deprecated

This module is deprecated. In Babel 6.16.0, an option `parserOpts` was added
that does [the exact same thing][babel blog].

[babel blog]: https://babeljs.io/blog/2016/09/28/6.16.0#new-feature

----

# babel-plugin-parser-opts

Pass arbitrary Babylon parser options to Babel.

[Babel] internally uses [Babylon] to parse JavaScript. However, it does
not expose all of Babylon's [options] to be changed by users. This plugin
makes it possible to change all of these options.

[![Build Status](https://img.shields.io/travis/TimothyGu/babel-plugin-parser-opts.svg)](https://travis-ci.org/TimothyGu/babel-plugin-parser-opts)
[![npm](https://img.shields.io/npm/v/babel-plugin-parser-opts.svg)](https://www.npmjs.com/package/babel-plugin-parser-opts)

[Babel]: https://github.com/babel/babel
[Babylon]: https://github.com/babel/babylon
[options]: https://github.com/babel/babylon#options

## Installation

```sh
$ npm install babel-plugin-parser-opts
```

## Usage

### Via `.babelrc`

**.babelrc**

```json
{
  "plugins": [
    [ "parser-opts", { "allowReturnOutsideFunction": true } ]
  ]
}
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  plugins: [
    [ 'parser-opts', { allowReturnOutsideFunction: true } ]
  ]
});
```

### Parser plugins

All provided options will overwrite existing options, with one exception:
`plugins`. If provided, `plugins` array will be merged with existing.
