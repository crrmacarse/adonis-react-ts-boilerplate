/*
|--------------------------------------------------------------------------
| Http server
|--------------------------------------------------------------------------
|
| This file bootstrap Adonisjs to start the HTTP server. You are free to
| customize the process of booting the http server.
|
| """ Loading ace commands """
|     At times you may want to load ace commands when starting the HTTP server.
|     Same can be done by chaining `loadCommands()` method after
|
| """ Preloading files """
|     Also you can preload files by calling `preLoad('path/to/file')` method.
|     Make sure to pass relative path from the project root.
*/

const { Ignitor } = require('@adonisjs/ignitor');
const fold = require('@adonisjs/fold');
// https://adonisjs.com/recipes/4.1/using-https
// const https = require('https');
// const pem = require('pem');

new Ignitor(fold)
  .appRoot(__dirname)
  .fireHttpServer()
  .catch(console.error);
