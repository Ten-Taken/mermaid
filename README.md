# mermaid

This is the front-end SPA powering The Mermaid Bar Destin.

## Application

- `Pinia` for central state management
- `Vue Router` for route management
- `Vuetify` for style framework

The app is meant to be deployed on Cloudflare and you'll see some of the wrangler worker system baked into pnpm scripts. So if you're deploying this in some other way, check over the regular build. Typically asset imports will work differently or break. No Typescript here - it's ugly and not necessary for an app this size. Neither are Unit Tests, but I left room for them.

## Dev Housekeeping

### Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

### Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

### Project Setup

```sh
pnpm install
```

#### Compile and Hot-Reload for Development

```sh
pnpm run dev
```

#### Build Preview (Cloudflare dependent)

```sh
pnpm run preview
```

#### Deploy from CLI (Cloudflare dependent)

```sh
pnpm run deploy
```

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

#### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
