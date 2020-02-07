'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


// This will be the api routes
Route.group(() => {
  // Route.resource('users', 'UserController');

}).prefix('api');

// This could be use as user profile
Route.group(() => {
  Route.get('/', ({ subdomains }) => {
    return `The username is ${subdomains.user}`
  })
}).domain(':user.myapp.com')

Route.post('login', 'UserController.login').middleware('guest');

Route.get('users/:id', 'UserController.show').middleware('auth');

Route.get('hello-world', ({ view }) => {
  return view.render('hello-world')
});

Route.on('/').render('welcome');
