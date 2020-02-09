# Adonis + React-TS boilerplate

![CI](https://github.com/crrmacarse/adonis-react-ts-boilerplate/workflows/CI/badge.svg?branch=master)

Read the [AdonisJS documentation](https://twitter.com/pablongbuhaymo) to get a full insight about this framework.

## Overview

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

- Bodyparser
- Session
- Authentication
- Web security middleware
- CORS
- Edge template engine
- Lucid ORM
- Migrations and seeds
- Testing

It also includes a pre-configured Webpack that caters specifically for React-TS

## Setup

```bash
npm install -g @adonisjs/cli
npm install
adonis key:generate
```

### Starting the application

```bash
npm run hot
adonis serve --dev -i resources,compiler,public
```

Note: Make sure your .env is identical with the .env.example

Optional

Run the SSR:

```bash
npm run ssr
```

Run frontend test watch:

```bash
npm run test-frontend:watch
```

### Migrations

```bash
adonis migration:run
```

### Testing the application

Frontend:

```bash
npm run test-frontend
```

Backend:

```bash
npm run test
```

### Others

Run lint:

```bash
npm run lint
```

Run bundle analyzer:

```bash
npm run build:stats
npm run analyze
```

### Building for Production

```bash
npm run prod
npm run ssr
```

---

Follow me at twitter: [🐔](https://twitter.com/pablongbuhaymo)
