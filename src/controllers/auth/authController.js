require('dotenv').config()
const userService = require('../../services/users/userService');

class AuthController {
    async auth(req, res) {
        try {
            const {email, password} = req.body;
            const user = await userService.getUserByEmail(email, password);
            if (!user.data) {
                return res.status(404).json({error: "User not found!"})
            }
            return res.status(200).json({
                token: user.data.user.stsTokenManager.accessToken,
                refreshToken: user.data.user.stsTokenManager.refreshToken
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = new AuthController();
