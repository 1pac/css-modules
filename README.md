# css-modules

## Sample
http://1pac.github.io/css-modules/sample/
> note: sample page has problems in Chrome, so please visit with Firefox, Safari, or IE.

## Preparation

This edition of css-modules is based on Grunt compiling.
You need to install commands below;

* node(npm) 2.13.5~
* Sass 3.4.16~

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
* Responsive Grid System


## Overview

The structure of scss assets is similar to SMACSS.
but we don't use STATE layer in SMACSS, nor use "l-" "is-" prefix name rule.

```scss

├ frontend_src/               // asset root
│   └ scss/
│       ├ lib/                // LIBRARY layer (common asset used only in SCSS)
│       │  ├ _variables.scss  // minimal elements vars
│       │  ├ _mixins.scss     // loader of mixins
│       │  └ mixins/          // mixin partials and extends core
│       │
│       ├ shared/             // styles shared across categories
│       │  ├ base/            // BASE    layer (sanitize, scaffoling, print)
│       │  ├ layout/          // LAYOUT  layer (grid, header/footer)
│       │  ├ develop/         // DEVELOP layer (guide, visualize-col)
│       │  ├ module/          // MODULE  layer (text, btn, link, etc)
│       │  ├ common.scss      // importer of BASE/LAYOUT/develop layers.
│       │  └ module.scss      // importer of MODULE Layer
│       │
│       ├ {caterory1}/        // THEME   layer (please add for each category)
│       │  └ {page}.scss
│       └ {caterory2}/
│
└ public/                     // public root
    ├ css/                    // compiled stylesheets
    │  ├ shared/
    │  ├ {caterory1}/
    │  └ {caterory2}/
    ├ img/
    │  ├ shared/
    │  ├ {caterory1}/
    │  └ {caterory2}/
    │
    └ index.html

```

## Specification

* This module use `sanitize.css` which reset all elements to `box-sizing: border-box`. So layout doesn't represented lower than IE8.
