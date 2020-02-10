'use strict';

class UserController {
  async login({ auth, request, response }) {
    try {
      const token = await auth.attempt(
        request.input('email'),
        request.input('password'),
      );

      return response.json({
        status: 'success',
        data: token,
      });
    } catch (error) {
      return response.status(400).json({
        status: 'error',
        message: 'Invalid email/password',
      });
    }
  }

  show({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile";
    }

    return auth.user;
  }
}

module.exports = UserController;
