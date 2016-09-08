React 15.3.1 + React-Router 2.7.0 + static-site-generator-webpack-plugin 3.0.0
==============================================================================

This repo is a static site boilerplate with react and react-router.
###Set Up
Clone the repo and node install dependencies.
```
git clone https://github.com/MessyFork/react-static-boilerplate-es6.git
cd react-static-boilerplate-es6
npm i
```

### Usage
Create react components in /src/pages that will serve as the body of each page.
Any changes to <Head> should be done in Root.js

Routing in the project is handled by react-router. Any new routes must be added
in both routes.js as well as data.js.

CSS and SASS support are included by default.
Any CSS/SASS files included in src/assets/css are made global by default. All
other files within src/ will have a unique hash attached to the classes.

extract-text-webpack-plugin is utilized by default even in development resulting
in a singular css file in /build.

### Development
webpack-dev-server is included for fast development.
Changes should be updated on any changes made to react modules or css/scss.
```
npm start
```
The server should start at localhost:8080

### Production
There isn't a default script for production. You can however, manually build
the site with
```
npm run webpack
```
which outputs to /build

### Mentions
@schneidmaster for his help in explaining the logic behind the code in router.js.

[how-to-vote](https://github.com/Bernie-2016/how-to-vote) a full fledged example
of a static React site with React-Router

@jxnblk for the [post](http://jxnblk.com/writing/posts/static-site-generation-with-react-and-webpack/) on creating static react sites.

css-tricks for their [article](https://css-tricks.com/css-modules-part-3-react/) on CSS modules and React. 
