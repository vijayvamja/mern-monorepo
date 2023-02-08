const User = require('./../../schemas/user');


class UserService {
    constructor() {
      this._store = User;
    }

    async listUsers() {
      return this._store.find();
    }
}
  
  module.exports = UserService;