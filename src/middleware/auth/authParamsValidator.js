const Validator = require('fastest-validator');
const v = new Validator();

class AuthParamsValidator {
    auth(req, res, next) {
        const schema = {
            email: "string",
            password: "string"
        };
        const check = v.compile(schema);
        if (check(req.body).length) {
            return res.status(422).json(check(req.body));
        } else {
            next();
        }
    };
}

module.exports = new AuthParamsValidator();
