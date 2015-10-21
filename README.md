# css-modules


## Preparation

This edition of css-modules is based on Grunt compiling.
You need to install commands below;

* Sass 3.4.16~
* Compass 1.0.3~

## Getting Started

### Installing components needed from npm.

```
$ cd frontend_src
$ npm install
```

note: Do **not** push `node_modules` or `sass_cache` directory to git.


## What's incruded

* basic styles of flow-contents
* frequent used modules like `box`, `table`, `media` etc.
* Grid System


## Overview

scss assets are structured based on SMACSS.

```scss

├ frontend_src/               // asset root
│   └ scss/
│       ├ common/             // styles shared in entire project
│       │  ├ base/            // BASE layer (sanitize, scaffoling, print)
│       │  ├ layout/          // LAYOUT layer (grid, header/footer)
│       │  ├ module/          // MODULE layer (text, btn, link, etc)
│       │  ├ develop/         // DEVELOP layer (guide, visualize-col)
│       │  ├ common.scss      // loader of BASE/LAYOUT/develop layers.
│       │  └ module.scss      // loader of
│       │
│       └ lib/                // LIBRARY which can be used every scss.
│          ├ _variables.scss  // minimal elements vars
│          ├ _mixins.scss     // loader of mixins
│          └ mixins/          // mixin partials and extends core
│
└ public/                     // public root
    ├ css/                    // compiled stylesheets
    ├ img/
    └ index.html

```

## Specification

* This module use `sanitize.css` which reset all elements to `box-sizing: border-box`. So layout doesn't represented lower than IE8.
