'use strict';

class UserController {
  async login({ auth, request }) {
    const { email, password } = request.all();
    await auth
      .remember(true)
      .attempt(email, password);

    return 'Logged in succesfully';
  }

  show({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile";
    }

    return auth.user;
  }
}

module.exports = UserController;
