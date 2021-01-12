# @dansmaculotte/nuxt-security

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> Module for Nuxt.js to configure security headers and more

## Features

This module allows you to configure various security headers such as CSP, HSTS or even generate security.txt file.
Here is a list of availables features :

- Strict-Transport-Security header
- Content-Security-Policy header
- X-Frame-Options header
- X-Xss-Protection
- X-Content-Type-Options header
- Referrer-Policy header
- Feature-Policy header
- security.txt file generation

### ToDo

- [ ] Sign security.txt with OpenPGP
- [ ] Headers as meta tags for SPA
- [ ] Public-Key-Pins

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

## Options

### `dev`

- Default: `process.env.SECURITY_DEV || false`

Enable module in development mode

### `hsts`

- Default: `null`

This option rely on [helmet hsts](https://helmetjs.github.io/docs/hsts/) package.

Example:

```js
hsts: {
  maxAge: 15552000,
  includeSubDomains: true,
  preload: true
},
```

### `csp`

- Default: `null`

This option rely on [helmet csp](https://helmetjs.github.io/docs/csp/) package.

Example:

```js
csp: {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
    objectSrc: ["'self'"],
  },
  reportOnly: false,
},
```

### `referrer`

- Default: `null`

This option rely on [helmet referrer policy](https://helmetjs.github.io/docs/referrer-policy/) package.

Example:

```js
referrer: 'same-origin',
```

### `features`

- Default: `null`

This option rely on [helmet feature policy](https://helmetjs.github.io/docs/feature-policy/) package.

Example:

```js
features: {
  notifications: ["'none'"]
},
```

### `securityFile`

- Default: `null`

This option allows you to generate a `security.txt` described by [securitytxt.org](https://securitytxt.org/).

When generating for SPA applications, the file will appear in the `dist/.well-known` folder.

For universal applications, the file is accessible at this path: `/.well-known/security.txt`.

Example:

```js
securityFile: {
  contacts: [
    'mailto:security@example.com',
    'https://example.com/security'
  ],
  // or contacts: 'mailto:security@example.com'
  canonical: 'https://example.com/.well-know/security.txt',
  preferredLanguages: ['fr', 'en'],
  // or preferredLanguages: 'fr',
  encryptions: ['https://example.com/pgp-key.txt'],
  // or encryptions: 'https://example.com/pgp-key.txt',
  acknowledgments: ['https://example.com/hall-of-fame.html'],
  // or acknowledgments: 'https://example.com/hall-of-fame.html',
  policies: ['https://example.com/policy.html'],
  // or policies: 'https://example.com/policy.html',
  hirings: ['https://example.com/jobs.html']
  // or hirings: 'https://example.com/jobs.html'
},
```

### `additionalHeaders`

- Default: `false`

If `true` it adds additional headers :

- `X-Frame-Options: SAMEORIGIN` - [documentation](https://scotthelme.co.uk/hardening-your-http-response-headers/#x-frame-options)
- `X-Xss-Protection: 1; mode=block` - [documentation](https://scotthelme.co.uk/hardening-your-http-response-headers/#x-xss-protection)
- `X-Content-Type-Options: nosniff` - [documentation](https://scotthelme.co.uk/hardening-your-http-response-headers/#x-content-type-options)

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
