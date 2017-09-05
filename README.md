# React Avocado Starter

[![Build Status](https://travis-ci.org/dariobanfi/react-avocado-starter.svg?branch=master)](https://travis-ci.org/dariobanfi/react-avocado-starter/)
[![Greenkeeper badge](https://badges.greenkeeper.io/dariobanfi/react-avocado-starter.svg)](https://greenkeeper.io/)

Simple yet full of energy, like an Avocado! 🥑

## About

This is a react boilerplate which aims to be as simple as possible, while providing many useful features as SSR and fast developmenet iteration. 

This project is derived from react-universally.

## Features

  - 👀 `react` as the view.
  - 🔀 `react-router` v4 as the router.
  - 🌍 Server Side Rendering.
  - 🚄 `express` server.
  - 💅 Styled Components for CSS.
  - 🎭 `jest` as the test framework.
  - 💄 Airbnb's ESlint configuration + Stylelint for Styled Components.
  - 😎 Progressive Web Application ready, with offline support, via a Service Worker.
  - 🐘 Long term browser caching of assets with automated cache invalidation.
  - 📦 All source is bundled using Webpack v2.
  - 🚀 Full ES2017+ support - use the exact same JS syntax across the entire project, both server and client code
  - 🔧 Centralised application configuration with helpers to avoid boilerplate in your code. Also has support for environment specific configuration files.
  - 🔥 Extreme live development - hot reloading of ALL changes to client/server source
  - ⛑ SEO friendly - `react-helmet` provides control of the page title/meta/styles/scripts from within your components.
  - 🤖 Optimised Webpack builds via HappyPack and an auto generated Vendor DLL for smooth development experiences.
  - 👮 Security on the `express` server using `helmet` and `hpp`.
  - 🏜 Asset bundling support. e.g. images/fonts.
  - 🎛 Preconfigured to support development and optimised production builds.
  - ✅ Fully compatible with MacOS, Linux and Windows


## Getting started

```bash
git clone https://github.com/dariobanfi/react-avocado-starter 
cd react-avocado-starter
npm i
npm run develop
```

**WINDOWS Users**: The project binds the dev server to `0.0.0.0` but this doesn't work for Windows.
To fix this, create a file called `.env.development.local` under the project root and add the following line:

`HOST=127.0.0.1`

## Personal TODO

- 100% Coverage
- Remove warnings and noise
- Add redux
- Make application a bit nicer
- Update npm deps
- codecov
