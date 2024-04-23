const axios = require('axios');

class UserService {
    async getUserByEmail(email, password) {
        return axios.post(`${process.env.USER_SERVICE}/users/info`, {email, password});
    }
}

module.exports = new UserService();
