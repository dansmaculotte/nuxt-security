# @dansmaculotte/nuxt-security

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> Module for Nuxt.js to configure security headers and more

## Features

This module configure

## :construction: WIP

This module is considered experimental and a work-in-progress.

### ToDo

- [x] Strict-Transport-Security
- [x] Content-Security-Policy
- [x] X-Frame-Options
- [x] X-Content-Type-Options
- [x] Referrer-Policy
- [x] Feature-Policy
- [x] security.txt
- [ ] Documentation

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@dansmaculotte/nuxt-security` dependency to your project

```bash
yarn add @dansmaculotte/nuxt-security # or npm install @dansmaculotte/nuxt-security
```

2. Add `@dansmaculotte/nuxt-security` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@dansmaculotte/nuxt-security',

    // With options
    [
      '@dansmaculotte/nuxt-security',
      {
        /* module options */
      }
    ]
  ],

  // Top level options
  security: {}
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE.md)

Copyright (c) Dans Ma Culotte <tech@dansmaculotte.fr>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@dansmaculotte/nuxt-security/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@dansmaculotte/nuxt-security
[npm-downloads-src]: https://img.shields.io/npm/dt/@dansmaculotte/nuxt-security.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@dansmaculotte/nuxt-security
[license-src]: https://img.shields.io/npm/l/@dansmaculotte/nuxt-security.svg?style=flat-square
[license-href]: https://npmjs.com/package/@dansmaculotte/nuxt-security
