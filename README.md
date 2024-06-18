# cpanel_web_app

## Node and NPM versions
- Node version 20.14.0
- NPM version 10.7.0

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

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

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
### Update TailwindCSS classes in use (only once)

Any changes to the TailwindCSS classes would need this command so the main CSS file is updated:

```sh
npx tailwindcss -i ./src/assets/base.css -o ./src/assets/main.css
```

### Update TailwindCSS classes in use (watch for changes)

Similar to the command above, but runs automatically once a file has been saved - saves having to keep repeating the command above during development:

```sh
npx tailwindcss -i ./src/assets/base.css -o ./src/assets/main.css --watch
```

## Uploading to a online sharded hosting service

1. Build the project:
```sh
npm run build
```

2. Zip the resulting 'dist' folder.

3. Upload zipped folder to hosting service public access location (e.g., 'public_html'), then extract contents. Ensure the contents are no longer in the 'dist' folder.

4. OPTIONAL: It may be necessary to configure a .htaccess file so the website is properly configured (especially to account for routing pages).
