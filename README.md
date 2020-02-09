# Adonis + React-TS boilerplate

Read the [documentation](https://twitter.com/pablongbuhaymo) to get a full insight about this framework.

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

Optional

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
```

---

Follow me at twitter: [🐔](https://twitter.com/pablongbuhaymo)
