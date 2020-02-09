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
const Route = use('Route');

Route.group(() => {
  // This will be the api routes

  Route.post('login', 'UserController.login').middleware('guest');
}).prefix('api');

Route.get('/adonis', ({ view }) => view.render('welcome'));

// This is where the react will take over
Route.any('*', ({ view }) => view.render('index'));
