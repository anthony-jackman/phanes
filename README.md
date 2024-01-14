# <center>PHANES</center>

Front-end that will encompass other distance learning (DL) performance support tools (PST).

## What's in a word

Phanes is a god that was adopted into Greek mythology from Orphic traditions. In Orphic tradition, Phanes created day while his wife (and possible sister) Nyx created the night. He is credited with developing creation in general and was deemed king of the cosmos as a result. Phanes went on to pass the cosmic scepter to his wife, who then passed it to her son, Uranus. 

## Features

- ViteJS / VueJS (version 3)
- Reliance on modern CSS methods
- Full responsive design
  - Intended to be used within modern browsers on desktops and mobile devices
- Unit and E2E BDD principles
  - Includes 508 / WCAG 2.1 Level AA conformancy automatic testing/verification
  - Cypress e2e and vue component testing and node testrunner for javascript unit testing
- Embedded User module
  - Full role-based CRUD operations
- Simple easy to use grid system

### This app will rely on connectivity to and/or the following modules:

- Prometheus (Fastify v4 backend with MongoDB database)
  - Common backend to below modules and this Phanes project
  - Prometheus is planned for hosting within its own VM
- Rhea (VueJS v3 front-end to process group trial events/data)
- Panacea (VueJS v3 front-end to process "Help Me" events/data)
- Hephaestus (VueJS v3 front-end to process course delivery events/data)
- Muses (VueJS v3 front-end to process analytic events/data)
- "TBD" (VueJS v3 front-end to process course details events/data)

## Authors and Contributors

- [@energeticpixels](https://github.com/EnergeticPixels): Coding

## Accolades
- XXXXXXX. (WEBSITE URL) What did I borrow?

## Development Specifics

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

#### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

