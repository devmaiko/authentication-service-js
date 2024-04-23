const createRouter = require("../utils");
const AuthController = require("../../controllers/auth/authController");
const paramsValidator = require("../../middleware/auth/authParamsValidator");

const router = createRouter();

router.post('/login', paramsValidator.auth, async (req, res) => {
    return AuthController.auth(req, res);
});

module.exports = router;
