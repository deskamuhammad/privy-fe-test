# Privy FE Test App

A Privy FE Test app with Quasar Framework. 
First of all, make sure you have all prerequisites installed (run well in my specs):
- [Node JS](https://nodejs.org/en/) (>=@8.9.0)
- [Vue JS](https://github.com/vuejs/vue-cli) (2.6.0)
- [Quasar Framework](https://quasar.dev/quasar-cli/installation) (1.4.5)
- [NPM](https://www.npmjs.com/get-npm) (6.7.0) or [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) (1.17.3)
- [Docker](https://www.docker.com/products/developer-tools)

### Run With Docker
```
# clone the repo
$ git clone git@github.com:deskamuhammad/privy-fe-test.git

# go into app's directory
$ cd privy-fe-test

# build & run docker
$ docker-compose up --build
```
Your program will run at localhost:8080 with server side rendering (ssr) by default.

### Run Without Docker
```
# make sure you have installed quasar cli
$ npm install -g @quasar/cli

# clone the repo
$ git clone git@github.com:deskamuhammad/privy-fe-test.git

# go into app's directory
$ cd privy-fe-test

# serve with hot reload at localhost:8080 by default.
$ quasar dev

# or you can serve with server side rendering (ssr)
$ quasar dev -m ssr
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

# privy-fe-test
